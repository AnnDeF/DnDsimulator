import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CreaturesData implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        'id': 1,
        'naam': 'Mike',
        'maxHP': 15,
        'battleHP':15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 2,
        'naam': 'Will',
        'maxHP': 15, 
        'battleHP':15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 3,
        'naam': 'Lucas',
        'maxHP': 15, 
        'battleHP':15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 4,
        'naam': 'Dustin',
        'maxHP': 15, 
        'battleHP':15, 
        'AC': 15,
        'Init': 15
        
      },
      {
        'id': 5,
        'naam': 'Jim',
        'maxHP': 30, 
        'battleHP':30, 
        'AC': 30,
        'Init': 30
        
      },
      {
        'id': 6,
        'naam': 'Nancy',
        'maxHP': 20, 
        'battleHP':20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 7,
        'naam': 'Steve',
        'maxHP': 20, 
        'battleHP':20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 8,
        'naam': 'Jonathan',
        'maxHP': 20, 
        'battleHP':20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 9,
        'naam': 'Joyce',
        'maxHP': 25, 
        'battleHP':25, 
        'AC': 25,
        'Init': 25
      },
      {
        'id': 10,
        'naam': 'Max',
        'maxHP': 15,
        'battleHP':15,  
        'AC': 15,
        'Init': 15
      },
      {
        'id': 11,
        'naam': 'Eleven',
        'maxHP': 25,
        'battleHP':25,  
        'AC': 25,
        'Init': 25
      }
    ];

    const monsters=[
      {
        'id': 12,
        'naam': 'Dart',
        'maxHP': 75,
        'battleHP':75,  
        'AC': 50,
        'Init': 60
      },
      {
        'id': 13,
        'naam': 'Demo-dog',
        'maxHP': 50,
        'battleHP':50,  
        'AC': 50,
        'Init': 50
      },
      {
        'id': 14,
        'naam': 'Demogorgon',
        'maxHP': 150,
        'battleHP':150,  
        'AC': 150,
        'Init': 150
      },
      {
        'id': 15,
        'naam': 'Mind Flayer',
        'maxHP': 250, 
        'battleHP':250, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 16,
        'naam': 'Orcus',
        'maxHP': 80, 
        'battleHP':80, 
        'AC': 75,
        'Init': 50
      },
      {
        'id': 17,
        'naam': 'Lolth',
        'maxHP': 120,
        'battleHP':120,  
        'AC': 80,
        'Init': 75
      },
      {
        'id': 18,
        'naam': 'Tiamat',
        'maxHP': 150, 
        'battleHP':150, 
        'AC': 180,
        'Init': 100
      },
      {
        'id': 19,
        'naam': 'Viserys',
        'maxHP': 220, 
        'battleHP':220, 
        'AC': 220,
        'Init': 220
      },
      {
        'id': 20,
        'naam': 'Drogon',
        'maxHP': 250, 
        'battleHP':250, 
        'AC': 250,
        'Init': 250
      },
      {
        'id': 21,
        'naam': 'Raeghal',
        'maxHP': 200, 
        'battleHP':200, 
        'AC': 200,
        'Init': 200
      },
      {
        'id': 22,
        'naam': 'Beholder',
        'maxHP': 150, 
        'battleHP':150, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 23,
        'naam': 'Owlbear',
        'maxHP': 65, 
        'battleHP':65, 
        'AC': 65,
        'Init': 65
      },
      {
        'id': 24,
        'naam': 'Kobold',
        'maxHP': 150,
        'battleHP':150,  
        'AC': 150,
        'Init': 125
      },
      {
        'id': 25,
        'naam': 'Orc',
        'maxHP': 105, 
        'battleHP':105, 
        'AC': 85,
        'Init': 95
      },
      {
        'id': 26,
        'naam': 'Bulette',
        'maxHP': 100,
        'battleHP':100,  
        'AC': 125,
        'Init': 100
      }
    ]

    const encounters = [];

    return {heroes, monsters, encounters};
  }
}

