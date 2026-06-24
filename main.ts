abstract class Template {
    abstract comparator(s1: string, s2: string): number
    
    sort(lista: Array<string>) {
        const n = lista.length
        for(let i = 0; i < n; i++) {
            let min = lista[i]
            for(let j = i + 1; j < n; j++) {
                if(this.comparator(min, lista[j]) < 0) {
                    [min, lista[j]] = [lista[j], min]
                }
            }
        }
    }
}

class SortAlfabetico extends Template {
    comparator(s1: string, s2: string): number {
        const s1l = s1.toLowerCase()
        const s2l = s2.toLowerCase()

        return s1l.localeCompare(s2l)
    }
}

class SortTamanho extends Template {
    comparator(s1: string, s2: string): number {
        if(s1.length > s2.length) return -1
        if(s1.length < s2.length) return 1
        return 0
    }
}

class SortReverso extends Template {
    comparator(s1: string, s2: string): number {
        const s1r = s1.split('').reverse().join('').toLowerCase()
        const s2r = s2.split('').reverse().join('').toLowerCase()

        return s1r.localeCompare(s2r)
    }
}

function main() {
    const lista = ['icaro', 'matheus', 'mariana', 'neymar', 'jose', 'shida', 'fernando']

    const compAlfabetico = new SortAlfabetico()
    const compTamanho = new SortTamanho()
    const compReverso = new SortReverso()

    console.log(lista)

    compAlfabetico.sort(lista)
    console.log(lista)

    compTamanho.sort(lista)
    console.log(lista)

    compReverso.sort(lista)
    console.log(lista)
}
