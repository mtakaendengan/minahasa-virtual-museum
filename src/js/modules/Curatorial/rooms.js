export const ROOM_SEQUENCE = [
    'Bab 1: Tanah dan Asal-Usul / Chapter 1: Land and Origins',
    'Bab 2: Leluhur dan Kehidupan Harian / Chapter 2: Ancestors and Daily Life',
    'Bab 3: Budaya dan Pertemuan / Chapter 3: Culture and Encounter',
    'Bab 4: Kolonialisme, Perlawanan, dan Perubahan / Chapter 4: Colonialism, Resistance, and Change',
    'Bab 5: Pendidikan, Nasionalisme, dan Masa Kini / Chapter 5: Education, Nationalism, and Today'
];

export const ROOM_TEXTS = {
    'Bab 1: Tanah dan Asal-Usul / Chapter 1: Land and Origins': 'Kunjungan dimulai dari tanah, danau, bahasa, dan kisah asal-usul Minahasa: tou, wanua, dan Kawanua.',
    'Bab 2: Leluhur dan Kehidupan Harian / Chapter 2: Ancestors and Daily Life': 'Ruang ini membaca jejak leluhur, waruga, rumah, ritus, dan kehidupan harian sebagai fondasi ingatan kolektif.',
    'Bab 3: Budaya dan Pertemuan / Chapter 3: Culture and Encounter': 'Di sini budaya hidup melalui Mapalus, Kabasaran, Maengket, dan perjumpaan antarkomunitas.',
    'Bab 4: Kolonialisme, Perlawanan, dan Perubahan / Chapter 4: Colonialism, Resistance, and Change': 'Ruang ini menempatkan perdagangan, kolonialisme, perang, dan perubahan sosial dalam perjalanan sejarah Minahasa.',
    'Bab 5: Pendidikan, Nasionalisme, dan Masa Kini / Chapter 5: Education, Nationalism, and Today': 'Bagian akhir menghubungkan pendidikan, pemikiran Sam Ratulangi, nasionalisme, diaspora, dan Minahasa masa kini.'
};

export function getRoomRank(roomName) {
    const index = ROOM_SEQUENCE.indexOf(roomName);
    return index === -1 ? ROOM_SEQUENCE.length : index;
}
