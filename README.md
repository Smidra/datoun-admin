# DATOUN admin
DAtabáze TOváren U Nás aaabbb

## administrační rozhraní
Tato Vue 3 aplikace je od úpravy (zatím především insertu) dat v Meilisearch databázi českých výrobků.
Vyvíjím ve Vue 3 + Formkit + Axios

Live build tohoto repozitáře:
* https://admin.datoun.cz
* https://github.com/Smidra/datoun-admin (REPO)

Preview katalogu na testování:
* https://datoun.cz
* https://github.com/Smidra/datoun-katalog (REPO)

## TODO
* [x] Zařídit odeslání JSONu do databáze
* [x] Zařídit přidávání a odebírání výroben pomocí plus tlačítka.
* [x] Pro jednu výrobnu musí být možno přidat libovolně kategorií
* [x] Potvrdit uživateli odeslání do databáze.
* [x] Přidat do formuláře checkbox "Firma stále funguje?"
* [x] Ověřit na backendu, která pole jsou prohledávací (aby tam třeba byli aliasy...)
* [x] Validace polí na frontendu
* [x] Doimplementovat do BoxAdderu props minimální (a zároveň startovní) počet políček
* [x] Validace polí na frontendu povolí Obec bez názvu a prázdnou kategorii
* [x] Validace by měla házet české kidy
* [ ] Tony **Našeptávání -> Měli jste na mysli tuto kategorii?** Kde sehnat JSON se všemi kategoriemi v databázi nevím - jedinné co mě napadá je stáhnout při načtení přidávací stránky databázi celou, vypreparovat z toho všechny použité kategorie a napovídat z toho...
* [ ] Tony **Nastylovat to, aby to vypadalo pěkně.**
* [ ] **Jak přesně do databáze přidávat u továrny "obec" - Geotag? Jméno obce, poštovní adresa? Určitě to chce našeptávání.** TOhle to chce promyslet jak na to.
* [ ] Jak se budou přidávat ikonky firem? Dám tam pole na URL? Nějaké inteligentní našeptávání? Automaticky se dohledají? Tady vůbec nevím jak se to dělá správně...
* [ ] ID firem jsou nyní sekundy epochy - to je dirty řešení - nastavil jsem ID jako sortable atribut - lze si vzít nejvyšší použité, ale i při tom může dojít ke kolizi
* [ ] Při vyhledání "false" se najdou všechny firmy, které mají nastavený flag, že nejsou zaniklé. (opravit v searchable attributes v meilisearch až budou pole v JSONU daná na 100 %)
* [x] validace polí na backendu (jasně definovat požadavky na JSON) není možná??!! Uf.
* [ ] Našeptávání -> Tato firma už v databázi je --> editace a update záznamu (Důležitá funkce, ale až na později.)


## Project setup
```
git clone git@github.com:Smidra/datoun-admin.git
npm install
npm run dev
```
CD projektu každý push vybuildí a deployne na adrese admin.datoun.cz

## Databáze
* Endpoint
  * https://wiki.smid.io
* Bearer token pro přidávání
  * Authorization:Bearer a1a01e589dfd0641f69b45c77dc46682752e5bd81bd9f77e964ee25ba19b47b4
* Index (jméno schéma)
  * firmy
* Token může v databázi všechno. Zatím. Pro testování doporučuji Postman + Meilisearch https://docs.meilisearch.com/learn/cookbooks/postman_collection.html#postman-collection-for-meilisearch
* Katalog věcí v databázi lze prohlédnout ve velice alfa stádiu na https://smidra.github.io/vyrobky/vue-project/dist/ <-- To jenom abyste nemuseli vždy startovat postmana. 

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