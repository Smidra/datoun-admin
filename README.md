# DATOUN admin
DAtabáze TOváren U Nás

## administrační rozhraní
Tato Vue 3 aplikace je od úpravy (zatím především insertu) dat v Meilisearch databázi českých výrobků.
Vyvíjím ve Vue 3 + Formkit + Axios

Live build tohoto repozitáře:
* https://admin.datoun.cz
* https://github.com/Smidra/datoun-admin (REPO)

Preview katalogu na testování:
* https://smidra.github.io/datoun-katalog/dist/
* https://github.com/Smidra/datoun-katalog (REPO)

## TODO
* [x] Zařídit odeslání JSONu do databáze
* [x] Zařídit přidávání a odebírání výroben pomocí plus tlačítka.
* [x] Pro jednu výrobnu musí být možno přidat libovolně kategorií
* [x] Potvrdit uživateli odeslání do databáze.
* [x] Přidat do formuláře checkbox "Firma stále funguje?"
* [x] Ověřit na backendu, která pole jsou prohledávací (aby tam třeba byli aliasy...)
* [x] Validace polí na frontendu
* [ ] Doimplementovat do BoxAdderu props minimální (a zároveň startovní) počet políček
* [ ] Validace polí na frontendu povolí Obec bez názvu a prázdnou kategorii
* [ ] Validace by měla házet české kidy
* [ ] Nastylovat to, aby to vypadalo.
* [ ] Jak se budou přidávat ikonky firem? Dám tam pole na URL? Nšjaké inteligentní našeptávání? Automaticky se dohledají?
* [ ] Jak přesně do databáze přidávat obec - Geotag? Jmono obce, poštovní adresa? Asi by se hodilo našeptávání...
* [ ] Našeptávání -> Měli jste na myslí tuto kategorii --- Důležitá funkce ---
* [ ] Našeptávání -> Tato firma už v databázi je. --- Důležitá funkce ---
* [ ] ID firem jsou nyní sekundy epochy - to je dirty řešení - nastavil jsem ID jako sortable atribut - lze si vzít nejvyšší použité, ale i při tom může dojít ke kolizi
* [ ] Při vyhledání "false" se najdou všechny firmy, které mají nastavený flag, že nejsou zaniklé.
* [x] validace polí na backendu (jasně definovat požadavky na JSON) není možná??!! Uf.


## Project setup
```
git clone git@github.com:Smidra/vyrobky-admin.git
npm install
npm run dev
```
CD projektu každý push vybuildí a deployne na adrese github pages. https://smidra.github.io/vyrobky-admin/

## Databáze
* Endpoint
  * https://wiki.smid.io
* Bearer token pro přidávání
  * Authorization:Bearer a1a01e589dfd0641f69b45c77dc46682752e5bd81bd9f77e964ee25ba19b47b4
* Index (jméno schéma)
  * firmy
* Token může v databázi všechno. Zatím. Pro testování doporučuji Postman + Meilisearch https://docs.meilisearch.com/learn/cookbooks/postman_collection.html#postman-collection-for-meilisearch
* Katalog věcí v databázi lze prohlédnout ve velice alfa stádiu na https://smidra.github.io/vyrobky/vue-project/dist/ <-- To jenom abyste nemuseli vždy startovat postmana. 

```
{
    "id": 1, // Povinné, seconds since epoch
    "jmeno_firmy": "Alpa", // Povinný string 2-100, povolené všechny znaky.
    "aliasy": [ // Dobrovolné. Když už jsou přidány musí být not empty < 100 znaků.
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
    ]
    "popisek_firmy": "Historie společnosti ALPA je historií stabilní a prosperující společnosti. Obliba značky ALPA přetrvala dlouhá desetiletí. Po předválečné etapě výroby v Brně se závod v roce 1948 přestěhoval do Velkého Meziříčí. V roce 1994 proběhla privatizace a společnost ALPA je dnes moderním a perspektivním podnikem. Vlastnictví tradiční české značky a přes 100 let trvající spokojenost našich zákazníků je nejcennějším klenotem, který zdobí značku ALPA.", // Dobrovolný, musí být pod 10 000 znaků.
    "eshop": "https://www.alpa.cz/cs/e-shop", // Povinné, musí být URL
    "logo": "https://www.alpa.cz/images/stories/Aktuality/2017/thumbnails/thumbnails/AL_logoALPA_RGB.jpg", // ???
    "zanikla": false, // Povinné. Buď true nabo false.
    "vyrobny": [ // Alespoň jedna povinná.
        {
            "lokalita": "Velké Meziříčí", // ???
            "popisek_vyroby": "Všechna výroba probíhá v závodu ve Velkém meziříčí.", // Povinný. Pod 10 000  znaků.
            "kategorie": [ // Alespoň jedna povinná.
                "Zubní pasty", // Neprázdná.
                "Masážní gely",
                "Holení"
            ]
        }
    ]
}
```


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
    ]
    "popisek_firmy": "Historie společnosti ALPA je historií stabilní a prosperující společnosti. Obliba značky ALPA přetrvala dlouhá desetiletí. Po předválečné etapě výroby v Brně se závod v roce 1948 přestěhoval do Velkého Meziříčí. V roce 1994 proběhla privatizace a společnost ALPA je dnes moderním a perspektivním podnikem. Vlastnictví tradiční české značky a přes 100 let trvající spokojenost našich zákazníků je nejcennějším klenotem, který zdobí značku ALPA.",
    "eshop": "https://www.alpa.cz/cs/e-shop",
    "logo": "https://www.alpa.cz/images/stories/Aktuality/2017/thumbnails/thumbnails/AL_logoALPA_RGB.jpg",
    "zanikla": false,
    "vyrobny": [
        {
            "lokalita": "Velké Meziříčí",
            "popisek_vyroby": "Všechna výroba probíhá v závodu ve Velkém meziříčí.",
            "kategorie": [
                "Zubní pasty",
                "Masážní gely",
                "Holení"
            ]
        }
    ]
}
```
