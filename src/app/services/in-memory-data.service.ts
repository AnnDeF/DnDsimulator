import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CreaturesData implements InMemoryDbService {
  createDb() {
    const creatures = [
      {
        'id': 1,
        'naam': 'Mike',
        'isHero': true,
        'maxHP': 15,
        'battleHP':15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 2,
        'naam': 'Will',
        'isHero': true,
        'maxHP': 15, 
        'battleHP':15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 3,
        'naam': 'Lucas',
        'isHero': true,
        'maxHP': 15, 
        'battleHP':15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 4,
        'naam': 'Dustin',
        'isHero': true,
        'maxHP': 15, 
        'battleHP':15, 
        'AC': 15,
        'Init': 15
        
      },
      {
        'id': 5,
        'naam': 'Jim',
        'isHero': true,
        'maxHP': 30, 
        'battleHP':30, 
        'AC': 30,
        'Init': 30
        
      },
      {
        'id': 6,
        'naam': 'Nancy',
        'isHero': true,
        'maxHP': 20, 
        'battleHP':20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 7,
        'naam': 'Steve',
        'isHero': true,
        'maxHP': 20, 
        'battleHP':20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 8,
        'naam': 'Jonathan',
        'isHero': true,
        'maxHP': 20, 
        'battleHP':20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 9,
        'naam': 'Joyce',
        'isHero': true,
        'maxHP': 25, 
        'battleHP':25, 
        'AC': 25,
        'Init': 25
      },
      {
        'id': 10,
        'naam': 'Max',
        'isHero': true,
        'maxHP': 15,
        'battleHP':15,  
        'AC': 15,
        'Init': 15
      },
      {
        'id': 11,
        'naam': 'Eleven',
        'isHero': true,
        'maxHP': 25,
        'battleHP':25,  
        'AC': 25,
        'Init': 25
      },
      {
        'id': 12,
        'naam': 'Dart',
        'isHero': false,
        'maxHP': 75,
        'battleHP':75,  
        'AC': 50,
        'Init': 60
      },
      {
        'id': 13,
        'naam': 'Demo-dog',
        'isHero': false,
        'maxHP': 50,
        'battleHP':50,  
        'AC': 50,
        'Init': 50
      },
      {
        'id': 14,
        'naam': 'Demogorgon',
        'isHero': false,
        'maxHP': 150,
        'battleHP':150,  
        'AC': 150,
        'Init': 150
      },
      {
        'id': 15,
        'naam': 'Mind Flayer',
        'isHero': false,
        'maxHP': 250, 
        'battleHP':250, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 16,
        'naam': 'Orcus',
        'isHero': false,
        'maxHP': 80, 
        'battleHP':80, 
        'AC': 75,
        'Init': 50
      },
      {
        'id': 17,
        'naam': 'Lolth',
        'isHero': true,
        'maxHP': 120,
        'battleHP':120,  
        'AC': 80,
        'Init': 75
      },
      {
        'id': 18,
        'naam': 'Tiamat',
        'isHero': false,
        'maxHP': 150, 
        'battleHP':150, 
        'AC': 180,
        'Init': 100
      },
      {
        'id': 19,
        'naam': 'Viserys',
        'isHero': false,
        'maxHP': 220, 
        'battleHP':220, 
        'AC': 220,
        'Init': 220
      },
      {
        'id': 20,
        'naam': 'Drogon',
        'isHero': false,
        'maxHP': 250, 
        'battleHP':250, 
        'AC': 250,
        'Init': 250
      },
      {
        'id': 21,
        'naam': 'Raeghal',
        'isHero': false,
        'maxHP': 200, 
        'battleHP':200, 
        'AC': 200,
        'Init': 200
      },
      {
        'id': 22,
        'naam': 'Beholder',
        'isHero': false,
        'maxHP': 150, 
        'battleHP':150, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 23,
        'naam': 'Owlbear',
        'isHero': false,
        'maxHP': 65, 
        'battleHP':65, 
        'AC': 65,
        'Init': 65
      },
      {
        'id': 24,
        'naam': 'Kobold',
        'isHero': false,
        'maxHP': 150,
        'battleHP':150,  
        'AC': 150,
        'Init': 125
      },
      {
        'id': 25,
        'naam': 'Orc',
        'isHero': false,
        'maxHP': 105, 
        'battleHP':105, 
        'AC': 85,
        'Init': 95
      },
      {
        'id': 26,
        'naam': 'Bulette',
        'isHero': false,
        'maxHP': 100,
        'battleHP':100,  
        'AC': 125,
        'Init': 100
      }
    ];
    return {creatures};
  }
}

