function check(a, b)
{
    var tostr = a.__repr__().v;
    if (tostr !== b)
    {
        print("GOT", tostr, a, "\nWANTED", b);
    }
    print("\twanted",b);
}

print("----------------------repr");
check(Long$.fromInt$(100), "100L");
check(Long$.fromInt$(1000), "1000L");
check(Long$.fromInt$(10000), "10000L");
check(Long$.fromInt$(100000), "100000L");
check(Long$.fromInt$(1000000), "1000000L");
check(Long$.fromInt$(10000000), "10000000L");
check(Long$.fromInt$(100000000), "100000000L");
check(Long$.fromInt$(1000000000), "1000000000L");
check(Long$.fromInt$(-100), "-100L");
check(Long$.fromInt$(-1000), "-1000L");
check(Long$.fromInt$(-10000), "-10000L");
check(Long$.fromInt$(-100000), "-100000L");
check(Long$.fromInt$(-1000000), "-1000000L");
check(Long$.fromInt$(-10000000), "-10000000L");
check(Long$.fromInt$(-100000000), "-100000000L");
check(Long$.fromInt$(-1000000000), "-1000000000L");
print("----------------------add");
check((Long$.fromInt$(100)).__add__(Long$.fromInt$(100)), "200L");
check((Long$.fromInt$(1000)).__add__(Long$.fromInt$(1000)), "2000L");
check((Long$.fromInt$(10000)).__add__(Long$.fromInt$(10000)), "20000L");
check((Long$.fromInt$(100000)).__add__(Long$.fromInt$(10)), "100010L");
check((Long$.fromInt$(100000)).__add__(Long$.fromInt$(100)), "100100L");
check((Long$.fromInt$(100000)).__add__(Long$.fromInt$(1000)), "101000L");
check((Long$.fromInt$(100000)).__add__(Long$.fromInt$(10000)), "110000L");
check((Long$.fromInt$(100000)).__add__(Long$.fromInt$(100000)), "200000L");
check((Long$.fromInt$(1000000)).__add__(Long$.fromInt$(1000000)), "2000000L");
check((Long$.fromInt$(16384)).__add__(Long$.fromInt$(16383)), "32767L");
check((Long$.fromInt$(16384)).__add__(Long$.fromInt$(16384)), "32768L");
check((Long$.fromInt$(-16384)).__add__(Long$.fromInt$(16384)), "0L");
check((Long$.fromInt$(-100)).__add__(Long$.fromInt$(-100)), "-200L");
check((Long$.fromInt$(-16384)).__add__(Long$.fromInt$(-16384)), "-32768L");
check((Long$.fromInt$(-16383)).__add__(Long$.fromInt$(-16384)), "-32767L");
check((Long$.fromInt$(100)).__add__(Long$.fromInt$(-100)), "0L");
check((Long$.fromInt$(-100)).__add__(Long$.fromInt$(100)), "0L");
check((Long$.fromInt$(-100)).__add__(Long$.fromInt$(1000000000)), "999999900L");
check((Long$.fromInt$(1000000000)).__add__(Long$.fromInt$(-100)), "999999900L");
check((Long$.fromInt$(0)).__add__(Long$.fromInt$(-100)), "-100L");
/*
print("----------------------sub");
check((Long$.fromInt$(100)).__sub__(Long$.fromInt$(100)), "0L");
check((Long$.fromInt$(0)).__sub__(Long$.fromInt$(100)), "-100L");
/*
check((Long$.fromInt$(100)).__sub__(Long$.fromInt$(0)), "100L");
check((Long$.fromInt$(100000)).__sub__(Long$.fromInt$(100000)), "0L");
check((Long$.fromInt$(1000000)).__sub__(Long$.fromInt$(100000)), "900000L");
check((Long$.fromInt$(100000)).__sub__(Long$.fromInt$(1000000)), "-900000L");
check((Long$.fromInt$(0)).__sub__(Long$.fromInt$(1000000)), "-1000000L");
check((Long$.fromInt$(65535)).__sub__(Long$.fromInt$(32767)), "32768L");
check((Long$.fromInt$(65535)).__sub__(Long$.fromInt$(32768)), "32767L");
check((Long$.fromInt$(32767)).__sub__(Long$.fromInt$(32768)), "-1L");
/*
print("mul");
check((Long$.fromInt$(0)).__mul__(Long$.fromInt$(0)), "0L");
check((Long$.fromInt$(100)).__mul__(Long$.fromInt$(0)), "0L");
check((Long$.fromInt$(100)).__mul__(Long$.fromInt$(100)), "10000L");
check((Long$.fromInt$(1)).__mul__(Long$.fromInt$(100)), "100L");
check((Long$.fromInt$(100)).__mul__(Long$.fromInt$(1)), "100L");
check((Long$.fromInt$(2)).__mul__(Long$.fromInt$(2)), "4L");
check((Long$.fromInt$(1000)).__mul__(Long$.fromInt$(1000)), "1000000L");
check((Long$.fromInt$(10000)).__mul__(Long$.fromInt$(10000)), "100000000L");
check((Long$.fromInt$(1234567)).__mul__(Long$.fromInt$(987654)), "1219325035818L");
check((Long$.fromInt$(-4)).__mul__(Long$.fromInt$(100)), "-400L");
*/
