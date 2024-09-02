1. В функції getPriority її параметр blockchain має тип any, а з логіки видно, що має бути тип string.
2. Замість switch case я б зробила об'єкт з усіма назвами токенів в ключах і їх значеннями.Тоді просто можна було б 
замість можна написати :

  const blockchains = {
    'Osmosis': 100,
    'Ethereum': 50,
    'Arbitrum': 30,
    'Zilliqa': 20,
    'Neo': 20
  }

	const getPriority = (blockchain: string): number => {
    if (Object.hasOwn(blockchains, blockchain)) {
      return blockchains[blockchain]
    }

    return -99;
	}

3. В змінній sortedBalances в методі filter першим параметром йде змінна balance типу WalletBalance, і далі по коду в цієї 
змінної звертаються до властивості blockchain, якої нема в її типі. Потрібно або правильно налаштувати типізацію, або ж взагалі 
малась на увазі властивість currency. 

4. Також в тому методі filter є дві перевірки, які можна об'єднати в одну (&&) та в першій перевірці неправильна назва змінної. 

      const balancePriority = getPriority(balance.currency);

		  return balancePriority > -99 && balance.amount <= 0;

5. Також в наступному методі sort є схожа помилка з звертанням до властивості blockchain. Умова if else не потрібна, так як 
така логіка вже описана під капотом цього метода. І все що нам треба зробити це повернути результат порівняння:

    return leftPriority - rightPriority;

6. Потім formattedBalances ніде не використовується, а мав би map-итись замість  sortedBalances в змінній rows.

    const rows = formattedBalances.map((balance: FormattedWalletBalance, index: number) => ...

7. Також не варто використовувати index як key, тому що значення мають бути унікальними, краще наприклад  використати
бібліотеку uuid.