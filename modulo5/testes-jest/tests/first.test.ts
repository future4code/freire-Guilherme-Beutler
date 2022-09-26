describe('Exercícios de testes Jest', () => {

    test('Ex0: Return true for even number  ', () => {

        const isEven = (n: number): boolean => {
            return n % 2 === 0
        }

        expect(isEven(112))
            .toBe(true)

    })

    test('Ex1: Return string to upper case', () => {

        const stringToUpperCase = (s: string) => {
            return s.toUpperCase()
        }

        expect(stringToUpperCase('bananinha')).toBe('BANANINHA')
    })

    test('Ex2: Return array of letters', () => {

        const stringToArray = (s: string) => {
            return s.split("")
        }

        expect(stringToArray('dev')).toEqual(["d", "e", "v"])
    })

    test('Ex3: Return number from a string', () => {

        const stringToNumber = (n: string) => {
            return Number(n)
        }

        expect(stringToNumber('50')).toBe(50)
    })

    test('Ex4: Takes a string and returns a number', () => {

        const stringToLength = (s: string) => {

            return s.split('').length
        }

        expect(stringToLength('gui')).toBe(3)
    })

    test('Ex5: Random number', () => {

        const number = Math.floor(10 * Math.random());

        const newNumber = (n: number) => {

            if (n <= 10 && number <= 10) {
                return true
            }
        }

        expect(newNumber(10)).toBe(true)
    })

    test('Ex6: Search by name', () => {

        interface User {
            name: string,
            email: string
        }

        const user: User[] = [
            {
                name: 'Joao',
                email: 'joao@joao.com.br'
            },
            {
                name: 'Astrodev ',
                email: 'astrodev@astrodev.com.br'
            }
        ]

        const listUser = (list: User[], name: string): string => {
            list.find(user => user.name === name)
            return name
        }

        expect(listUser(user, 'Astrodev')).toBe('Astrodev')
    })

    test('Ex7: Returns the average of the array', () => {

        const calcAverage = (list: number[]): number => {
            let totalSum = 0

            for (let n of list) {
                totalSum += n
            }

            const average = Math.ceil(totalSum / list.length)

            return average

        }

        expect(calcAverage([10, 4, 7, 6])).toEqual(7)
    })

    test('Ex8: Return the current age', () => {

        const currentAge = (birthYear: number): number => {
            const currentDate = new Date().getFullYear()
            const age = currentDate - birthYear
            return age
        }

        expect(currentAge(2000)).toBe(22)
    })

    test('Ex9: Return date formatted', () => {

        const formatDate = (initialDate: string): string => {
            const date = new Date(initialDate)
            const formattedDate = date.toLocaleDateString()

            return formattedDate
        }

        expect(formatDate('2022/9/26')).toBe('9/26/2022')
    })


})