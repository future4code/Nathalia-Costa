import { validateCharacter } from "../src/Exercicio01"

describe("Teste unitário da função validateCharacter", () =>{
    test('Personagem com o nome vazio', () => {
        const result = validateCharacter({
            name: '',
            life: 1500,
            defense: 500,
            strength: 450
        })

        expect(result).toBe(false)
    });
    test('Personagem com a vida vazia', () => {
        const result = validateCharacter({
            name: 'Nath',
            life: 0,
            defense: 500,
            strength: 450
        })

        expect(result).toBe(true)
    });
    test('Personagem com a força vazia', () => {
        const result = validateCharacter({
            name: 'Nath',
            life: 1500,
            defense: 500,
            strength: 0
        })

        expect(result).toBe(true)
    });
    test('Personagem com a defesa vazia', () => {
        const result = validateCharacter({
            name: 'Nath',
            life: 1500,
            defense: 0,
            strength: 450
        })

        expect(result).toBe(true)
    });
    // test('Personagem com a vida negativa', () => {
    //     const result = validateCharacter({
    //         name: 'Nath',
    //         life: -2,
    //         defense: 500,
    //         strength: 450
    //     })

    //     expect(result).toBe(false)
    // });
    test('Personagem com informações validas', () => {
        const result = validateCharacter({
            name: 'nana',
            life: 1000,
            defense: 800,
            strength: 650
        })

        expect(result).toBe(true)
    })
})