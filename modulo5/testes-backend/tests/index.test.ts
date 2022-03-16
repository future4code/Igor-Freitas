describe('getUserById', () => {
	// (a)
   test('Exibe o erro quando o ID não existe', async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getUserById('abc')
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe('User not found')
    }
  })
    
	// (b)
  test('Deve retornar o respectivo usuário quando o id for registrado', async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )
        
      const result = await getUserById('id_mock_admin')

      expect(getUserById).toHaveBeenCalledWith('id_mock_admin')
      expect(result).toEqual({
        id: 'id_mock_admin',
        name: 'astrodev',
        email: 'astrodev@gmail.com',
        role: 'ADMIN',
      })
    } catch (error) {
      console.log(error.message)
    }
  })
})