def inverter_string(string_original):
    string_invertida = ''
    for i in range(len(string_original) - 1, -1, -1):
        string_invertida += string_original[i]

    # Imprime a string invertida
    print("String original:", string_original)
    print("String invertida:", string_invertida)

    # String a ser invertida (você pode mudar para qualquer string que desejar)
string_original = input("digite a palavra a ser invertida:")

inverter_string(string_original)


