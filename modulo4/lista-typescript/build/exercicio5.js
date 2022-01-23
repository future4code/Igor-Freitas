var ROLE;
(function (ROLE) {
    ROLE["USER"] = "user";
    ROLE["ADMIN"] = "admin";
})(ROLE || (ROLE = {}));
const arrayUsuarios = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];
function apenasAdmins(array) {
    const filtroEMap = array.filter((user) => user.role === "admin").map((user) => {
        return user.email;
    });
    console.log(filtroEMap);
}
apenasAdmins(arrayUsuarios);
//# sourceMappingURL=exercicio5.js.map