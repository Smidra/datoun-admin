# Výrobky - admin
Tato Vue 3 aplikace je od úpravy (především insertu) dat v Meilisearch databázi českých výrobků.

## TODO
* [x] Zařídit odeslání JSONu do databáze
* [x] Zařídit přidávání a odebírání výroben pomocí plus tlačítka.
* [ ] Potvrdit uživateli odeslání do databáze.
* [ ] Základně nastylovat aby to trošičku vypadalo.
* [ ] Jak se budou přidávat ikonky?
* [ ] Pro jednu výrobnu musí být možno přidat libovolně kategorií
* [ ] Validace polí na frontendu + validace polí na backendu (jasně definovat požadavky na JSON)
* [ ] Jak přesně do databáze přidávat obec - Geotag? Jmono obce, poštovní adresa? Asi by se hodilo našeptávání...
* [ ] Našeptávání -> Tato firma už v databázi je.
* [ ] Našeptávání -> Měli jste na myslí tuto kategorii?
* [ ] ID firem jsou nyní sekundy epochy - to je dirty řešení - nastavil jsem ID jako sortable atribut - lze si vzít nejvyšší použité, ale i při tom může dojít ke kolizi


## Project setup
```
git cloe this repo
npm install
npm run dev
```
CD projektu každý push vybuildí a ukáže na adrese github pages. https://smidra.github.io/vyrobky-admin/

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
    "id": 1,
    "jmeno_firmy": "Alpa",
    "popisek_firmy": "Historie společnosti ALPA je historií stabilní a prosperující společnosti. Obliba značky ALPA přetrvala dlouhá desetiletí...",
    "eshop": "https://www.alpa.cz/cs/e-shop",
    "vyrobny": [
        {
            "lokalita": "Velké Meziříčí",
            "popisek_vyroby": "Všechna výroba probíhá v závodu ve Velkém meziříčí.",
            "kategorie": [
                "Zubní pasty",
                "Masážní gely",
                "Holení"
            ]
        },
        {
            "lokalita": "Malé Meziříčí",
            "popisek_vyroby": "Žádná výroba se neodehrává v malinké vsi Malé meziříčí",
            "kategorie": [
                "Zubní pasty",
                "Mašinky"
            ]
        }
    ]
}
```
