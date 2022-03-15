import { attackInvDep, Character, validateCharacter } from '../src';

describe('teste de validação de personagem', () => {

    test('Retorna falso para nome vazio', () => {
        const result = validateCharacter({
            name: '',
            life: 4000,
            strength: 400,
            defense: 600,
        })

        expect(result).toBe(false);
    })

    test('Retorna falso para vida igual a zero', () => {
        const result = validateCharacter({
            name: 'Gohan',
            life: 0,
            strength: 500,
            defense: 300,
        })

        expect(result).toBe(false);
    })

    test('Retorna falso para força igual a zero', () => {
        const result = validateCharacter({
            name: 'Mestre Kami',
            life: 3000,
            strength: 0,
            defense: 500,
        })

        expect(result).toBe(false);
    })

    test('Retorna falso para defesa igual a zero', () => {
        const result = validateCharacter({
            name: 'Mr Satan',
            life: 3000,
            strength: 500,
            defense: 0,
        })

        expect(result).toBe(false);
    })

    test('Retorna falso para defesa menor que zero', () => {
        const result = validateCharacter({
            name: 'Chi chi',
            life: 3000,
            strength: 600,
            defense: -400,
        })

        expect(result).toBe(false);
    })

    test('Retorna true para valores passados corretamente', () => {
        const result = validateCharacter({
            name: 'Nappa',
            life: 5000,
            strength: 600,
            defense: 400,
        })

        expect(result).toBe(true);
    })
})

describe('Testes da função de attack', () => {

    test('Sucesso no attack', () => {
        const validatorMock = jest.fn(() => {
            return true;
        })

        const attacker: Character = {
            name: 'Kuririn',
            life: 1000,
            defense: 300,
            strength: 800,
        }

        const defender: Character = {
            name: 'Frezza',
            life: 4000,
            defense: 600,
            strength: 1000,
        }

        attackInvDep(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(3800);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    })

    test('Teste de eo no return da função ', () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: Character = {
            name: 'Vegeta',
            life: 2000,
            defense: 200,
            strength: 0,
        };

        const defender: Character = {
            name: 'Goku',
            life: 3000,
            defense: 500,
            strength: 900,
        };

        try {
            attackInvDep(attacker, defender, validatorMock as any);
        } catch (e) {
            expect(e.message).toBe('Invalid character');
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    })
})