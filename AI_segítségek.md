# Ai segítségek


1. input : Segíts egy random harcban amibe bekérünk kettő embert és 50/50 hogy kinyeri, JS-be

Output:

```js
function parbaj(karakter1, karakter2) {
    let nyertes = "";
    if (Math.random() < 0.5) {
        nyertes = karakter1 + " nyert!";
    } else {
        nyertes = karakter2 + " nyert!";
    }
    kiir(nyertes);
    return nyertes;
}
```

2. input : Rakj a p-m nek box shadow-ot

Output:

box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

