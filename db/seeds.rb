Comment.create!([
  {concert_id: 1, description: "This is going to be the best concert ever", title: "Hardcore Fan"},
  {concert_id: 2, description: "This is going to be the best concert ever", title: "Hardcore Fan"},
  {concert_id: 3, description: "This is going to be the best concert ever", title: "Hardcore Fan"},
  {concert_id: 4, description: "This is going to be the best concert ever", title: "Hardcore Fan"},
  {concert_id: 5, description: "This is going to be the best concert ever", title: "Hardcore Fan"},
  {concert_id: 6, description: "This is going to be the best concert ever", title: "Hardcore Fan"},
  {concert_id: 1, description: "Can't wait to see him!", title: "Gravity Lover"},
  {concert_id: 6, description: "LETS RAGE!", title: "Borgmania"},
  {concert_id: 6, description: "FUN", title: "FUNFUNF"}
])
Concert.create!([
  {artist: "John Mayer", date: "2015-07-23 00:00:00", venue: "Cruzan Amphitheatre", city: "Boca Raton", ticket_price: 45, description: ""},
  {artist: "DeadMau5", date: "2016-01-03 00:00:00", venue: "Liv @ Fountaine Bleu", city: "Miami Beach", ticket_price: 105, description: ""},
  {artist: "Kaskade", date: "2014-02-20 00:00:00", venue: "American Airlines Arena", city: "Miami", ticket_price: 85, description: ""},
  {artist: "ACDC", date: "1985-07-01 00:00:00", venue: "Landshark Stadium", city: "Miami", ticket_price: 15, description: ""},
  {artist: "Above and Beyond", date: "2015-07-21 00:00:00", venue: "Arkadia", city: "Miami", ticket_price: 40, description: "Long ass Show"},
  {artist: "Borgore", date: "2015-07-10 00:00:00", venue: "Mansion", city: "Miami", ticket_price: 20, description: "Party every night!"},
  {artist: "Phil Collins", date: "2015-08-19 00:00:00", venue: "Cruzan", city: "Boca", ticket_price: 45, description: "I can feel it coming"},
  {artist: "Vanilla Ice", date: "2015-07-24 00:00:00", venue: "Savannah Stadium", city: "Atlanta", ticket_price: 35, description: "ICe ice baby"}
])
