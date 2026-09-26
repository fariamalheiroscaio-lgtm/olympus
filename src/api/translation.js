const translations = {
  Zeus: {
    name: 'Zeus',
    description:
      'Deus dos céus, dos raios e soberano dos deuses do Olimpo.',
    origin: 'Filho de Cronos e Reia.',
    symbols: ['Raio', 'Águia', 'Carvalho'],
    abode: 'Monte Olimpo',
    powers: ['Controle dos raios', 'Poder sobre o céu'],
  },

  Hera: {
    name: 'Hera',
    description:
      'Deusa do casamento, da família e rainha dos deuses.',
    origin: 'Filha de Cronos e Reia.',
    symbols: ['Pavão', 'Romã'],
    abode: 'Monte Olimpo',
    powers: ['Proteção do casamento', 'Poder divino'],
  },

  Athena: {
    name: 'Atena',
    description:
      'Deusa da sabedoria, da estratégia e da guerra justa.',
    origin:
      'Filha de Zeus, que teria surgido completamente armada de sua cabeça.',
    symbols: ['Coruja', 'Oliveira', 'Escudo'],
    abode: 'Monte Olimpo',
    powers: ['Sabedoria', 'Estratégia', 'Habilidade de combate'],
  },

  Poseidon: {
    name: 'Poseidon',
    description:
      'Deus dos mares, terremotos e cavalos.',
    origin: 'Filho de Cronos e Reia.',
    symbols: ['Tridente', 'Cavalo', 'Golfinho'],
    abode: 'Palácio submarino',
    powers: ['Controle dos mares', 'Terremotos'],
  },

  Hades: {
    name: 'Hades',
    description:
      'Deus do submundo e governante dos mortos.',
    origin: 'Filho de Cronos e Reia.',
    symbols: ['Elmo da invisibilidade', 'Cérbero'],
    abode: 'Submundo',
    powers: ['Controle do submundo', 'Invisibilidade'],
  },

  Apollo: {
    name: 'Apolo',
    description:
      'Deus da luz, música, profecia, medicina e artes.',
    origin: 'Filho de Zeus e Leto.',
    symbols: ['Lira', 'Sol', 'Arco'],
    abode: 'Monte Olimpo',
    powers: ['Profecia', 'Música', 'Cura'],
  },

  Artemis: {
    name: 'Ártemis',
    description:
      'Deusa da caça, da natureza selvagem e da lua.',
    origin: 'Filha de Zeus e Leto.',
    symbols: ['Arco', 'Veado', 'Lua'],
    abode: 'Florestas',
    powers: ['Caça', 'Arco e flecha'],
  },

  Aphrodite: {
    name: 'Afrodite',
    description:
      'Deusa do amor, da beleza e do desejo.',
    origin: 'Deusa associada ao nascimento a partir da espuma do mar.',
    symbols: ['Pomba', 'Rosa', 'Concha'],
    abode: 'Monte Olimpo',
    powers: ['Amor', 'Beleza', 'Sedução'],
  },

  Ares: {
    name: 'Ares',
    description:
      'Deus da guerra e da violência dos conflitos.',
    origin: 'Filho de Zeus e Hera.',
    symbols: ['Lança', 'Escudo', 'Capacete'],
    abode: 'Monte Olimpo',
    powers: ['Força', 'Combate'],
  },

  Hermes: {
    name: 'Hermes',
    description:
      'Mensageiro dos deuses e deus das viagens, comércio e velocidade.',
    origin: 'Filho de Zeus e Maia.',
    symbols: ['Sandálias aladas', 'Caduceu'],
    abode: 'Monte Olimpo',
    powers: ['Velocidade', 'Comunicação', 'Viagens'],
  },

  Hephaestus: {
    name: 'Hefesto',
    description:
      'Deus do fogo, da metalurgia e dos artesãos.',
    origin: 'Filho de Hera, segundo algumas tradições.',
    symbols: ['Martelo', 'Bigorna', 'Fogo'],
    abode: 'Forjas do Olimpo',
    powers: ['Metalurgia', 'Criação de armas'],
  },

  Demeter: {
    name: 'Deméter',
    description:
      'Deusa da agricultura, das colheitas e da fertilidade da terra.',
    origin: 'Filha de Cronos e Reia.',
    symbols: ['Trigo', 'Tocha', 'Cornucópia'],
    abode: 'Terra e Monte Olimpo',
    powers: ['Agricultura', 'Fertilidade'],
  },

  Persephone: {
    name: 'Perséfone',
    description:
      'Deusa associada à primavera e rainha do submundo.',
    origin: 'Filha de Zeus e Deméter.',
    symbols: ['Romã', 'Flores'],
    abode: 'Monte Olimpo e Submundo',
    powers: ['Primavera', 'Poder sobre os mortos'],
  },

  Hercules: {
    name: 'Hércules',
    description:
      'Herói conhecido por sua força extraordinária e pelos Doze Trabalhos.',
    origin: 'Filho de Zeus e Alcmena.',
    symbols: ['Clava', 'Pele do leão de Nemeia'],
    abode: 'Elísio após a morte',
    powers: ['Força sobre-humana', 'Resistência', 'Coragem'],
  },

  'Hercules (Heracles)': {
    name: 'Hércules (Heracles)',
    description:
      'Herói divino e um dos maiores guerreiros da mitologia grega.',
    origin: 'Filho de Zeus e Alcmena.',
    symbols: ['Clava', 'Pele de leão'],
    abode: 'Elísio após a morte',
    powers: ['Força sobre-humana', 'Resistência', 'Coragem'],
  },

  Achilles: {
    name: 'Aquiles',
    description:
      'Um dos maiores guerreiros gregos da Guerra de Troia.',
    origin: 'Filho de Peleu e Tétis.',
    symbols: ['Armadura', 'Lança'],
    abode: 'Fítia',
    powers: ['Habilidade de combate', 'Força'],
  },

  Theseus: {
    name: 'Teseu',
    description:
      'Herói ateniense conhecido por derrotar o Minotauro.',
    origin: 'Filho de Egeu, segundo diferentes tradições.',
    symbols: ['Espada', 'Sandálias'],
    abode: 'Atenas',
    powers: ['Força', 'Inteligência'],
  },

  Perseus: {
    name: 'Perseu',
    description:
      'Herói conhecido por derrotar Medusa.',
    origin: 'Filho de Zeus e Danae.',
    symbols: ['Espada', 'Escudo'],
    abode: 'Argos',
    powers: ['Habilidade de combate', 'Coragem'],
  },

  Odysseus: {
    name: 'Odisseu',
    description:
      'Herói conhecido por sua inteligência e pela longa viagem de retorno para Ítaca.',
    origin: 'Rei de Ítaca.',
    symbols: ['Arco'],
    abode: 'Ítaca',
    powers: ['Inteligência', 'Estratégia'],
  },

  Medusa: {
    name: 'Medusa',
    description:
      'Uma das Górgonas, conhecida por transformar pessoas em pedra com seu olhar.',
    origin: 'Filha de Fórcis e Ceto.',
    symbols: ['Serpentes', 'Máscara da Górgona'],
    abode: 'Caverna na Líbia',
    powers: ['Olhar petrificante'],
  },

  Minotaur: {
    name: 'Minotauro',
    description:
      'Criatura com corpo humano e cabeça de touro, aprisionada no Labirinto de Creta.',
    origin: 'Filho de Pasífae e do Touro de Creta.',
    symbols: ['Cabeça de touro', 'Labirinto'],
    abode: 'Labirinto de Creta',
    powers: ['Força', 'Ferocidade'],
  },

  Cerberus: {
    name: 'Cérbero',
    description:
      'Cão de três cabeças que guardava a entrada do submundo.',
    origin: 'Filho de Equidna e Tifão.',
    symbols: ['Três cabeças', 'Cauda de serpente'],
    abode: 'Submundo',
    powers: ['Guarda dos mortos', 'Força'],
  },

  Sphinx: {
    name: 'Esfinge',
    description:
      'Criatura alada com corpo de leão e cabeça humana, conhecida por seus enigmas.',
    origin: 'Criatura associada a Tifão e Equidna em algumas tradições.',
    symbols: ['Leão', 'Asas'],
    abode: 'Arredores de Tebas',
    powers: ['Enigmas', 'Força'],
  },

  Chimera: {
    name: 'Quimera',
    description:
      'Criatura híbrida que possuía características de leão, cabra e serpente.',
    origin: 'Filha de Tifão e Equidna.',
    symbols: ['Leão', 'Cabra', 'Serpente'],
    abode: 'Lícia',
    powers: ['Sopro de fogo'],
  },

  Hydra: {
    name: 'Hidra',
    description:
      'Serpente monstruosa com várias cabeças e capacidade de regeneração.',
    origin: 'Filha de Tifão e Equidna.',
    symbols: ['Várias cabeças', 'Serpente'],
    abode: 'Lerna',
    powers: ['Regeneração', 'Veneno'],
  },

  Pegasus: {
    name: 'Pégaso',
    description:
      'Cavalo alado que surgiu do sangue de Medusa.',
    origin: 'Nascido do sangue de Medusa.',
    symbols: ['Asas', 'Cavalo'],
    abode: 'Monte Olimpo',
    powers: ['Voo', 'Velocidade'],
  },

  Typhon: {
    name: 'Tifão',
    description:
      'Ser monstruoso associado a Gaia e Tártaro, considerado pai de diversos monstros.',
    origin: 'Filho de Gaia e Tártaro.',
    symbols: ['Serpentes', 'Fogo'],
    abode: 'Monte Etna',
    powers: ['Força colossal', 'Tempestades'],
  },

  Cronus: {
    name: 'Cronos',
    description:
      'Titã associado ao tempo e antigo soberano dos Titãs.',
    origin: 'Filho de Urano e Gaia.',
    symbols: ['Foice'],
    abode: 'Mundo dos Titãs',
    powers: ['Poder divino', 'Domínio dos Titãs'],
  },

  Gaia: {
    name: 'Gaia',
    description:
      'Deusa primordial da Terra e mãe dos Titãs.',
    origin: 'Entidade primordial formada no início dos tempos.',
    symbols: ['Terra', 'Árvores'],
    abode: 'Terra',
    powers: ['Criação da vida', 'Poder sobre a Terra'],
  },

  Uranus: {
    name: 'Urano',
    description:
      'Deus primordial do céu e pai dos Titãs.',
    origin: 'Entidade primordial formada no início dos tempos.',
    symbols: ['Céu', 'Estrelas'],
    abode: 'Céu',
    powers: ['Domínio do céu'],
  },

  Thanatos: {
    name: 'Tânato',
    description:
      'Deus associado à morte.',
    origin: 'Filho de Nix e Érebo.',
    symbols: ['Borboleta', 'Espada'],
    abode: 'Submundo',
    powers: ['Morte pacífica', 'Guia dos mortos'],
  },

  Hecate: {
    name: 'Hécate',
    description:
      'Deusa da magia, feitiçaria e fantasmas.',
    origin: 'Filha de Perses e Astéria.',
    symbols: ['Tocha', 'Chaves'],
    abode: 'Submundo',
    powers: ['Magia', 'Feitiçaria'],
  },

  Morpheus: {
    name: 'Morpheu',
    description:
      'Deus dos sonhos.',
    origin: 'Filho de Hipnos.',
    symbols: ['Asas', 'Papoula'],
    abode: 'Mundo dos sonhos',
    powers: ['Manipulação dos sonhos', 'Sono'],
  },

  Eris: {
    name: 'Éris',
    description:
      'Deusa da discórdia e do conflito.',
    origin: 'Associada à origem da Guerra de Troia através da Maçã da Discórdia.',
    symbols: ['Maçã da Discórdia'],
    abode: 'Monte Olimpo',
    powers: ['Semeadura da discórdia'],
  },

  Psyche: {
    name: 'Psique',
    description:
      'Deusa da alma, originalmente uma princesa mortal que alcançou a imortalidade.',
    origin: 'Princesa mortal posteriormente divinizada.',
    symbols: ['Borboleta', 'Lâmpada'],
    abode: 'Monte Olimpo',
    powers: ['Imortalidade', 'Representação da alma'],
  },

  Triton: {
    name: 'Tritão',
    description:
      'Mensageiro do mar, filho de Poseidon e Anfitrite.',
    origin: 'Filho de Poseidon e Anfitrite.',
    symbols: ['Concha', 'Tridente'],
    abode: 'Palácio submarino',
    powers: ['Controle dos mares'],
  },

  Amphitrite: {
    name: 'Anfitrite',
    description:
      'Rainha do mar e esposa de Poseidon.',
    origin: 'Nereida, filha de Nereu e Dóris.',
    symbols: ['Golfinho', 'Tridente'],
    abode: 'Palácio submarino',
    powers: ['Domínio sobre o mar'],
  },

  Chaos: {
    name: 'Caos',
    description:
      'Vazio primordial do qual surgiu a existência.',
    origin: 'Primeira entidade primordial.',
    symbols: ['Vazio', 'Escuridão'],
    abode: 'Vazio primordial',
    powers: ['Origem da criação'],
  },

  Tartarus: {
    name: 'Tártaro',
    description:
      'Abismo primordial e local mais profundo do submundo.',
    origin: 'Uma das primeiras entidades primordiais.',
    symbols: ['Abismo', 'Escuridão'],
    abode: 'Abismo abaixo do submundo',
    powers: ['Prisão dos Titãs'],
  },
}

export function getTranslation(character) {
  if (!character) {
    return null
  }

  return translations[character.name] || null
}

export default translations