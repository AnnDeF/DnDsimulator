import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CreaturesData implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        'id': 1,
        'naam': 'Mike',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 2
      },
      {
        'id': 2,
        'naam': 'Will',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 1
      },
      {
        'id': 3,
        'naam': 'Lucas',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 2
      },
      {
        'id': 4,
        'naam': 'Dustin',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 2

      },
      {
        'id': 5,
        'naam': 'Jim',
        'maxHP': 30,
        'battleHP': 30,
        'AC': 30,
        'init': 6

      },
      {
        'id': 6,
        'naam': 'Nancy',
        'maxHP': 20,
        'battleHP': 20,
        'AC': 20,
        'init': 3
      },
      {
        'id': 7,
        'naam': 'Steve',
        'maxHP': 20,
        'battleHP': 20,
        'AC': 20,
        'init': 4
      },
      {
        'id': 8,
        'naam': 'Jonathan',
        'maxHP': 20,
        'battleHP': 20,
        'AC': 20,
        'init': 4
      },
      {
        'id': 9,
        'naam': 'Joyce',
        'maxHP': 25,
        'battleHP': 25,
        'AC': 25,
        'init': 5
      },
      {
        'id': 10,
        'naam': 'Max',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 3
      },
      {
        'id': 11,
        'naam': 'Eleven',
        'maxHP': 25,
        'battleHP': 25,
        'AC': 25,
        'init': 4
      }
    ];

    const monsters = [
      {
        'id': 12,
        'naam': 'Dart',
        'maxHP': 75,
        'battleHP': 75,
        'AC': 50,
        'init': -5
      },
      {
        'id': 13,
        'naam': 'Demo-dog',
        'maxHP': 50,
        'battleHP': 50,
        'AC': 50,
        'init': -2
      },
      {
        'id': 14,
        'naam': 'Demogorgon',
        'maxHP': 150,
        'battleHP': 150,
        'AC': 150,
        'init': 5
      },
      {
        'id': 15,
        'naam': 'Mind Flayer',
        'maxHP': 250,
        'battleHP': 250,
        'AC': 150,
        'init': 6
      },
      {
        'id': 16,
        'naam': 'Orcus',
        'maxHP': 80,
        'battleHP': 80,
        'AC': 75,
        'init': -5
      },
      {
        'id': 17,
        'naam': 'Lolth',
        'maxHP': 120,
        'battleHP': 120,
        'AC': 80,
        'init': 5
      },
      {
        'id': 18,
        'naam': 'Tiamat',
        'maxHP': 150,
        'battleHP': 150,
        'AC': 180,
        'init': 5
      },
      {
        'id': 19,
        'naam': 'Viserys',
        'maxHP': 220,
        'battleHP': 220,
        'AC': 220,
        'init': 4
      },
      {
        'id': 20,
        'naam': 'Drogon',
        'maxHP': 250,
        'battleHP': 250,
        'AC': 250,
        'init': 5
      },
      {
        'id': 21,
        'naam': 'Raeghal',
        'maxHP': 200,
        'battleHP': 200,
        'AC': 200,
        'init': 4
      },
      {
        'id': 22,
        'naam': 'Beholder',
        'maxHP': 150,
        'battleHP': 150,
        'AC': 150,
        'init': -5
      },
      {
        'id': 23,
        'naam': 'Owlbear',
        'maxHP': 65,
        'battleHP': 65,
        'AC': 65,
        'init': 5
      },
      {
        'id': 24,
        'naam': 'Kobold',
        'maxHP': 150,
        'battleHP': 150,
        'AC': 150,
        'init': 1
      },
      {
        'id': 25,
        'naam': 'Orc',
        'maxHP': 105,
        'battleHP': 105,
        'AC': 85,
        'init': -5
      },
      {
        'id': 26,
        'naam': 'Bulette',
        'maxHP': 100,
        'battleHP': 100,
        'AC': 125,
        'init': 10
      }
    ]

    const encounters = [
      {
        'id': 1,
        'encounterNaam': 'Adventure Time',
        'selectedHeroes': [{
            'id': 9,
            'naam': 'Joyce',
            'maxHP': 25,
            'battleHP': 25,
            'AC': 25,
            'init': 5
          },
          {
            'id': 10,
            'naam': 'Max',
            'maxHP': 15,
            'battleHP': 15,
            'AC': 15,
            'init': 3
          },
          {
            'id': 11,
            'naam': 'Eleven',
            'maxHP': 25,
            'battleHP': 25,
            'AC': 25,
            'init': 4
          }],
        'selectedMonsters': [
          {
            'id': 24,
            'naam': 'Kobold',
            'maxHP': 150,
            'battleHP': 150,
            'AC': 150,
            'init': 1
          },
          {
            'id': 25,
            'naam': 'Orc',
            'maxHP': 105,
            'battleHP': 105,
            'AC': 85,
            'init': -5
          },
          {
            'id': 26,
            'naam': 'Bulette',
            'maxHP': 100,
            'battleHP': 100,
            'AC': 125,
            'init': 10
          }]
      },
      {
      'id': 2,
      'encounterNaam': 'Hero Academia',
      'selectedHeroes': [{
        'id': 1,
        'naam': 'Mike',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 2
      },
      {
        'id': 2,
        'naam': 'Will',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 1
      },
      {
        'id': 3,
        'naam': 'Lucas',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 2
      },
      {
        'id': 4,
        'naam': 'Dustin',
        'maxHP': 15,
        'battleHP': 15,
        'AC': 15,
        'init': 2

      }],
      'selectedMonsters': [
        {
          'id': 19,
          'naam': 'Viserys',
          'maxHP': 220,
          'battleHP': 220,
          'AC': 220,
          'init': 4
        },
        {
          'id': 20,
          'naam': 'Drogon',
          'maxHP': 250,
          'battleHP': 250,
          'AC': 250,
          'init': 5
        },
        {
          'id': 21,
          'naam': 'Raeghal',
          'maxHP': 200,
          'battleHP': 200,
          'AC': 200,
          'init': 4
        }]
      }
    ]

    return { heroes, monsters, encounters };
  }
}

