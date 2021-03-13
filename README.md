# Custom Boop Scripts

[Boop](https://boop.okat.best/) allows users to add [Custom Scripts](https://github.com/IvanMathy/Boop/blob/main/Boop/Documentation/CustomScripts.md). This is a repo for a collection of my own custom scripts.

## Scripts

### Swap EUR and DKK

Swaps every occurence of `<amount> EUR` or `<amount> €` with the corresponding `<amount> DKK` and vice versa.

This script could be easily hacked to use a different constant conversion for other amounts (EUR and DKK are pretty much constant at a factor of 7.5).

This means it will swap:

```
Calc: 10.00 EUR + 75.00 DKK = 20.00 EUR
```

with

```
Calc: 75.00 DKK + 10.00 EUR = 150.00 DKK
```

and back if you apply it again. (The `.00` will be added by the script, but are not required as input)
