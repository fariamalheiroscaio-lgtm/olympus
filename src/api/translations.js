const translations = {
  Zeus: {
    name: 'Zeus',
    description:
      'Rei dos deuses e governante do Monte Olimpo. Deus do céu, dos raios e dos trovões.',
    origin: 'Filho dos titãs Cronos e Reia.',
    powers: [
      'Controle dos raios e trovões',
      'Controle do clima',
      'Grande força divina',
      'Imortalidade',
    ],
    symbols: ['Raio', 'Águia', 'Carvalho'],
    abode: 'Monte Olimpo',
  },

  Athena: {
    name: 'Atena',
    description:
      'Deusa da sabedoria, da estratégia, da guerra justa e das artes.',
    origin:
      'Filha de Zeus. Segundo o mito, nasceu da cabeça de Zeus.',
    powers: [
      'Sabedoria extraordinária',
      'Estratégia de guerra',
      'Grande habilidade de combate',
      'Imortalidade',
    ],
    symbols: ['Coruja', 'Oliveira', 'Égide'],
    abode: 'Monte Olimpo',
  },
}

export function getTranslation(character) {
  if (!character) {
    return null
  }

  return translations[character.name] || null
}

export default translations