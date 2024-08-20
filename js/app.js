console.log('JS Test')

const { createApp } = Vue

createApp({
    data() {
        return {
            selected: '',

            statFlatMax: 18,
            statFlatMin: 4,

            statsDice1: [
                {
                    name: 'Forza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Destrezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Costituzione',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Intelligenza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Saggezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Carisma',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Sanità',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Fama',
                    visible: false,
                    dice: [],
                },
                {
                    name: 'Fortuna',
                    visible: false,
                    dice: [],
                },
            ],

            statsDice2: [
                {
                    name: 'Forza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Destrezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Costituzione',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Intelligenza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Saggezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Carisma',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Sanità',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Fama',
                    visible: false,
                    dice: [],
                },
                {
                    name: 'Fortuna',
                    visible: false,
                    dice: [],
                },
            ],

            statsDice3: [
                {
                    name: 'Forza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Destrezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Costituzione',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Intelligenza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Saggezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Carisma',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Sanità',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Fama',
                    visible: false,
                    dice: [],
                },
                {
                    name: 'Fortuna',
                    visible: false,
                    dice: [],
                },
            ],


            choseTab:{
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
            },

            firstTab: [
                {
                    stat: 'Forza',
                    value: '-',
                    visible: true,
                    id: 1.1
                },
                {
                    stat: 'Destrezza',
                    value: '-',
                    visible: true,
                    id: 1.2
                },
                {
                    stat: 'Costituzione',
                    value: '-',
                    visible: true,
                    id: 1.3
                },
                {
                    stat: 'Intelligenza',
                    value: '-',
                    visible: true,
                    id: 1.4
                },
                {
                    stat: 'Saggezza',
                    value: '-',
                    visible: true,
                    id: 1.5
                },
                {
                    stat: 'Carisma',
                    value: '-',
                    visible: true,
                    id: 1.6
                },
                {
                    stat: 'Sanità',
                    value: '-',
                    visible: true,
                    id: 1.7
                },
                {
                    stat: 'Fama',
                    value: '-',
                    visible: false,
                    id: 1.8
                },
                {
                    stat: 'Fortuna',
                    value: '-',
                    visible: false,
                    id: 1.9
                },
            ],

            secondTab: [
                {
                    stat: 'Forza',
                    value: '-',
                    visible: true,
                    id: 2.1
                },
                {
                    stat: 'Destrezza',
                    value: '-',
                    visible: true,
                    id: 2.2
                },
                {
                    stat: 'Costituzione',
                    value: '-',
                    visible: true,
                    id: 2.3
                },
                {
                    stat: 'Intelligenza',
                    value: '-',
                    visible: true,
                    id: 2.4
                },
                {
                    stat: 'Saggezza',
                    value: '-',
                    visible: true,
                    id: 2.5
                },
                {
                    stat: 'Carisma',
                    value: '-',
                    visible: true,
                    id: 2.6
                },
                {
                    stat: 'Sanità',
                    value: '-',
                    visible: true,
                    id: 2.7
                },
                {
                    stat: 'Fama',
                    value: '-',
                    visible: false,
                    id: 2.8
                },
                {
                    stat: 'Fortuna',
                    value: '-',
                    visible: false,
                    id: 2.9
                },
            ],

            thirdTab: [
                {
                    stat: 'Forza',
                    value: '-',
                    visible: true,
                    id: 3.1
                },
                {
                    stat: 'Destrezza',
                    value: '-',
                    visible: true,
                    id: 3.2
                },
                {
                    stat: 'Costituzione',
                    value: '-',
                    visible: true,
                    id: 3.3
                },
                {
                    stat: 'Intelligenza',
                    value: '-',
                    visible: true,
                    id: 3.4
                },
                {
                    stat: 'Saggezza',
                    value: '-',
                    visible: true,
                    id: 3.5
                },
                {
                    stat: 'Carisma',
                    value: '-',
                    visible: true,
                    id: 3.6
                },
                {
                    stat: 'Sanità',
                    value: '-',
                    visible: true,
                    id: 3.7
                },
                {
                    stat: 'Fama',
                    value: '-',
                    visible: false,
                    id: 3.8
                },
                {
                    stat: 'Fortuna',
                    value: '-',
                    visible: false,
                    id: 3.9
                },
            ]
            
        }    
        
    },
    
    watch:{
        selected(newValue, oldValue){
            if(newValue !== oldValue){
                this.tabSelection()
            }
        }
    },

    methods:{

        getRandomInt(min, max) 
        {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
        },


        toggleStat(index)
        {
           
            for(let i = 0; i < this.firstTab.length; i++)
            {
                
                statFT = this.firstTab[i];
                statST = this.secondTab[i];
                statTT = this.thirdTab[i];
                statSD1 = this.statsDice1[i];
                statSD2 = this.statsDice2[i];
                statSD3 = this.statsDice3[i];

                if(i === index)
                {
                    statFT.visible = !statFT.visible;
                    statST.visible = !statST.visible;
                    statTT.visible = !statTT.visible;
                    statSD1.visible = !statSD1.visible;
                    statSD2.visible = !statSD2.visible;
                    statSD3.visible = !statSD3.visible;
                }
            }
            
        },


        generateStat(tab, diceRolled, diceRemoved, diceArray)
        {
            
            for(let i = 0; i < tab.length; i++){                
                const numbers = []
                
                for(let i = 0; i < diceRolled; i++){
                    const number = this.getRandomInt(1, 7)
                    numbers.push(number)
                }
                
                    
                numbers.sort()
                const newNumbers = numbers.slice(diceRemoved, numbers.length)
    
                let stat = 0;
                for(let i = 0; i < newNumbers.length; i++){
                    const dice = newNumbers[i]
    
                    stat += dice
                }
    

                
                diceArray[i].dice = newNumbers
                


                tab[i].value = stat
            }
        },

        generateStatFlat(tab)
        {
            for(let i = 0; i < tab.length; i++){

                const number = this.getRandomInt(this.statFlatMin, this.statFlatMax + 1)

                tab[i].value = number
            }
        },

        tabSelection()
        {

            for(let i = 0; i < this.firstTab.length; i++){
                this.firstTab[i].value = '-'
            }

            for(let i = 0; i < this.secondTab.length; i++){
                this.secondTab[i].value = '-'
            }

            for(let i = 0; i < this.thirdTab.length; i++){
                this.thirdTab[i].value = '-'
            }

            for(let i = 0; i < this.statsDice1.length; i++){
                this.statsDice1[i].dice = []
            }

            for(let i = 0; i < this.statsDice2.length; i++){
                this.statsDice2[i].dice = []
            }

            for(let i = 0; i < this.statsDice3.length; i++){
                this.statsDice3[i].dice = []
            }

            
            this.choseTab.first = true;
            this.choseTab.second = false;
            this.choseTab.third = false;
            this.choseTab.fourth = false;
            this.choseTab.fifth = false;           

            if(this.selected === '4d6'){
                this.choseTab.first = false;
                this.choseTab.second = true;
                this.choseTab.third = false;
                this.choseTab.fourth = false;
                this.choseTab.fifth = false;
            }else if(this.selected === '5d6'){
                this.choseTab.first = false;
                this.choseTab.second = false;
                this.choseTab.third = true;
                this.choseTab.fourth = false;
                this.choseTab.fifth = false;
            }else if(this.selected === '6d6'){
                this.choseTab.first = false;
                this.choseTab.second = false;
                this.choseTab.third = false;
                this.choseTab.fourth = true;
                this.choseTab.fifth = false;
            }else if(this.selected === 'flat'){
                this.choseTab.first = false;
                this.choseTab.second = false;
                this.choseTab.third = false;
                this.choseTab.fourth = false;
                this.choseTab.fifth = true;
            }
            
        },

        getDiceImg(number)
        {
            return `img/d6-${number}.png`           
        }
    }




}).mount('#app')