# Tusunami Bank
```
El excelentísimo expresidente Piñera, usando fondos monetarios que tenía guardados en las Islas
Caimán (que incluían billetes que misteriosamente decían “made in Talca”), ha abierto una nueva
cadena de bancos en el país. Bancos Tusunami, cuyo lema es “no lo vimos venir”, ha abierto
sucursales en todas las regiones del país, y sus tasas son tan sospechosamente buenas que mucha
gente ha abierto cuentas en ellas.
Cada ciudad principal y algunos poblados tienen una sucursal, la cual tiene un número correlativo
(ej., Sucursal 3, Sucursal 10, etc.) y una dirección. Estas sucursales tienen un administrador
encargado, y una serie de clientes, de los cuales se guardan los apellidos, nombres, y RUT. Los
clientes tienen registradas una o más cuentas en su sucursal correspondiente.
Una cuenta tiene asociados un número, una comisión mensual, interés, y un saldo, además de otros
atributos. Un cliente puede realizar diversas operaciones con sus cuentas, incluyendo retiro de
dinero, depósitos, transferencias a otras cuentas, y verificación de saldo. Hay tres tipos de cuentas:
- La cuenta Corriente permite a los usuarios realizar depósitos ilimitados, y realizar retiros
incluso si su saldo es 0 o negativo. Los retiros por debajo de saldo 0 sólo se pueden realizar
si el saldo final no supera un límite definido por la línea de crédito, un atributo que se define
al momento de crear la cuenta.
- La cuenta de Ahorros tiene un estado que indica si está activa o no, y se crea haciendo un
depósito inicial de $100,000 pesos. Una vez creada, los usuarios pueden realizar depósitos
con saldo ilimitado, pero solo pueden realizar retiros mientras el monto esté sobre $50,000
pesos. Si algún retiro hace que el saldo baje de ese monto, la cuenta queda inactiva, y no se
pueden realizar retiros hasta que se superen los $100,000 nuevamente. No pueden
realizarse retiros por debajo de $0 pesos.
- La cuenta Vista es la más limitada, con un límite de saldo de $2,500,000, lo que significa que
no se pueden realizar depósitos sobre ese monto. Asimismo, no pueden realizarse retiros
por debajo de $0 pesos, y sólo los primeros 4 retiros son gratuitos. Cada retiro adicional
tiene un costo de $400 pesos.
Cada mes, el banco calcular el interés generado por cada cuenta en base al saldo, y luego descuenta
la comisión mensual. Esta información puede ser accedida por los clientes, en la forma de un
“extracto mensual”, que muestra el saldo original, interés y comisión, y el saldo final
```