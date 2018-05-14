import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const creatures = [
      {
        'id': 1,
        'naam': 'Mike',
        'isHero': true,
        'HP': 15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 2,
        'naam': 'Will',
        'isHero': true,
        'HP': 15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 3,
        'naam': 'Lucas',
        'isHero': true,
        'HP': 15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 4,
        'naam': 'Dustin',
        'isHero': true,
        'HP': 15, 
        'AC': 15,
        'Init': 15
        
      },
      {
        'id': 5,
        'naam': 'Jim',
        'isHero': true,
        'HP': 30, 
        'AC': 30,
        'Init': 30
        
      },
      {
        'id': 6,
        'naam': 'Nancy',
        'isHero': true,
        'HP': 20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 7,
        'naam': 'Steve',
        'isHero': true,
        'HP': 20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 8,
        'naam': 'Jonathan',
        'isHero': true,
        'HP': 20, 
        'AC': 20,
        'Init': 20
      },
      {
        'id': 9,
        'naam': 'Joyce',
        'isHero': true,
        'HP': 25, 
        'AC': 25,
        'Init': 25
      },
      {
        'id': 10,
        'naam': 'Max',
        'isHero': true,
        'HP': 15, 
        'AC': 15,
        'Init': 15
      },
      {
        'id': 11,
        'naam': 'Eleven',
        'isHero': true,
        'HP': 25, 
        'AC': 25,
        'Init': 25
      },
      {
        'id': 12,
        'naam': 'Dart',
        'isHero': false,
        'HP': 75, 
        'AC': 50,
        'Init': 60
      },
      {
        'id': 13,
        'naam': 'Demo-dog',
        'isHero': false,
        'HP': 50, 
        'AC': 50,
        'Init': 50
      },
      {
        'id': 14,
        'naam': 'Demogorgon',
        'isHero': false,
        'HP': 150, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 15,
        'naam': 'Mind Flayer',
        'isHero': false,
        'HP': 250, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 16,
        'naam': 'Orcus',
        'isHero': false,
        'HP': 80, 
        'AC': 75,
        'Init': 50
      },
      {
        'id': 17,
        'naam': 'Lolth',
        'isHero': true,
        'HP': 120, 
        'AC': 80,
        'Init': 75
      },
      {
        'id': 18,
        'naam': 'Tiamat',
        'isHero': false,
        'HP': 150, 
        'AC': 180,
        'Init': 100
      },
      {
        'id': 19,
        'naam': 'Viserys',
        'isHero': false,
        'HP': 220, 
        'AC': 220,
        'Init': 220
      },
      {
        'id': 20,
        'naam': 'Drogon',
        'isHero': false,
        'HP': 250, 
        'AC': 250,
        'Init': 250
      },
      {
        'id': 21,
        'naam': 'Raeghal',
        'isHero': false,
        'HP': 200, 
        'AC': 200,
        'Init': 200
      },
      {
        'id': 22,
        'naam': 'Beholder',
        'isHero': false,
        'HP': 150, 
        'AC': 150,
        'Init': 150
      },
      {
        'id': 23,
        'naam': 'Owlbear',
        'isHero': false,
        'HP': 65, 
        'AC': 65,
        'Init': 65
      },
      {
        'id': 24,
        'naam': 'Kobold',
        'isHero': false,
        'HP': 150, 
        'AC': 150,
        'Init': 125
      },
      {
        'id': 25,
        'naam': 'Orc',
        'isHero': false,
        'HP': 105, 
        'AC': 85,
        'Init': 95
      },
      {
        'id': 26,
        'naam': 'Bulette',
        'isHero': false,
        'HP': 100, 
        'AC': 125,
        'Init': 100
      }
    ];
    return {creatures};
  }
}

