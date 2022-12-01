# DATOUN admin
DAtabáze TOváren U Nás

## Administrační rozhraní
Tato Vue 3 aplikace je od insertu dat do Algolia databáze českých továren na výrobky v ČR.
Nepočítáme služby a jídlo. Vlastník nás nezajímá.

Live build tohoto repozitáře:
* https://admin.datoun.cz
* https://github.com/Smidra/datoun-admin (REPO)

Preview katalogu na testování:
* https://datoun.cz
* https://github.com/Smidra/datoun-katalog (REPO)

## TODO
* [x] Přidávání a odebírání aliasů nefunguje. Po odebrání nepřidává spolehlivě.
* [ ] Checkbox nepřeává svou value do JSONU k poslání.
* [ ] Validace polí, nějaké základní (nejde kliknout "odeslat" úplně hned)
* [ ] Nějaká zpětná vazba na úspěšnosti odeslání.
* [ ] Odebírání věcí v poli i mimo pořadí - mínuskem nebo křížkem u věci.
* [ ] Našeptávání -> Tato firma už v databázi je --> editace a update záznamu (Důležitá funkce, ale až na později.)


## Project setup
```
git clone git@github.com:Smidra/datoun-admin.git
npm install
npm run dev
```
CD projektu každý push vybuildí a deployne na adrese admin.datoun.cz

## Databáze
* Algolia ID
  * S27OT8U78J
* Bearer token pro přidávání
  * Authorization:Bearer 39e5cf3041647ce2f68c09b8e477eb8c
* Index (jméno schéma)
  * firmy

## Ukázka bez popisek
```
{
    "id": 1,
    "jmeno_firmy": "Alpa",
    "aliasy": [
      "Francovka",
      "Lesana",
      "Luna",
      "Amica",
      "Apiko",
      "Aviril",
      "Pedik",
      "Sypsi",
      "Batole",
      "Windsor",
      "Farao",
      "Fougere",
      "Chypre",
      "Classique"
    ],
    "popisek_firmy": "Historie společnosti ALPA je historií stabilní a prosperující společnosti. Obliba značky ALPA přetrvala dlouhá desetiletí. Po předválečné etapě výroby v Brně se závod v roce 1948 přestěhoval do Velkého Meziříčí. V roce 1994 proběhla privatizace a společnost ALPA je dnes moderním a perspektivním podnikem. Vlastnictví tradiční české značky a přes 100 let trvající spokojenost našich zákazníků je nejcennějším klenotem, který zdobí značku ALPA.",
    "poznamky_k_vyrobe": "Všechna výroba probíhá v závodu ve Velkém meziříčí.",
    "eshop": "https://www.alpa.cz/cs/e-shop",
    "logo": "https://www.alpa.cz/images/stories/Aktuality/2017/thumbnails/thumbnails/AL_logoALPA_RGB.jpg",
    "funguje": true,
    "vyrobny": [
        {
            "lokalita": {...obec z obce.json...}, 
            "kategorie0": [
                "Drogerie"
            ],
            "kategorie1": [
                "Drogerie > Zubní pasty",
                "Drogerie > Masážní gely",
                "Drogerie > Holení"
            ]
        }
    ]
}
```