exports.bengali = {
    //http://www.aczoom.com/itrans/html/beng/node4.html
    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0985", // অ BENGALI LETTER A
        "A"     :   "\u0986", // আ BENGALI LETTER AA
        "aa"    :   "\u0986", // আ BENGALI LETTER AA
        "i"     :   "\u0987", // ই BENGALI LETTER I
        "I"     :   "\u0988", // ঈ BENGALI LETTER II
        "ii"    :   "\u0988", // ঈ BENGALI LETTER II
        "u"     :   "\u0989", // উ BENGALI LETTER U
        "U"     :   "\u098A", // ঊ BENGALI LETTER UU
        "uu"    :   "\u098A", // ঊ BENGALI LETTER UU
        "R^i"   :   "\u098B", // ঋ BENGALI LETTER VOCALIC R
        "RRi"   :   "\u098B", // ঋ BENGALI LETTER VOCALIC R
        "L^i"   :   "\u098C", // ঌ BENGALI LETTER VOCALIC L
        "LLi"   :   "\u098C", // ঌ BENGALI LETTER VOCALIC L
        //""    :   "\u098D", // " <reserved>
        //""    :   "\u098E", // " <reserved>
        "e"     :   "\u098F", // এ BENGALI LETTER E ** Manual Change ***
        "E"     :   "\u098F", // এ BENGALI LETTER E
        "ee"    :   "\u098F", // এ BENGALI LETTER E
        "ai"    :   "\u0990", // ঐ BENGALI LETTER AI
        //""    :   "\u0991", // " <reserved>
        //""    :   "\u0992", // " <reserved>
        "o"     :   "\u0993", // ও BENGALI LETTER O ** Manual Change ***
        "O"     :   "\u0993", // ও BENGALI LETTER O
        "oo"    :   "\u0993", // ও BENGALI LETTER O
        "au"    :   "\u0994", // ঔ BENGALI LETTER AU

        // Additional vowels for Sanskrit
        "R^I"   :   "\u09E0", // ৠ BENGALI LETTER VOCALIC RR
        "RRI"   :   "\u09E0", // ৠ BENGALI LETTER VOCALIC RR
        "L^I"   :   "\u09E1", // ৡ BENGALI LETTER VOCALIC LL
        "LLI"   :   "\u09E1", // ৡ BENGALI LETTER VOCALIC LL

        // Sign: Manually added from Devanagari
        "OM"    :   "\u0950", // ॐ
        "ooM"   :   "\u0950", // ॐ
        "AUM"   :   "\u0950"  // ॐ
    },

    "Dependent_vowel": { // +()
        "a"     :   "",       // ADDED
        "A"     :   "\u09BE", // $া BENGALI VOWEL SIGN AA
        "aa"    :   "\u09BE", // $া BENGALI VOWEL SIGN AA
        "i"     :   "\u09BF", // $ি BENGALI VOWEL SIGN I • stands to the left of the consonant
        "I"     :   "\u09C0", // $ী BENGALI VOWEL SIGN II
        "ii"    :   "\u09C0", // $ী BENGALI VOWEL SIGN II
        "u"     :   "\u09C1", // $ু BENGALI VOWEL SIGN U
        "U"     :   "\u09C2", // $ূ BENGALI VOWEL SIGN UU
        "uu"    :   "\u09C2", // $ূ BENGALI VOWEL SIGN UU
        "R^i"   :   "\u09C3", // $ৃ BENGALI VOWEL SIGN VOCALIC R
        "RRi"   :   "\u09C3", // $ৃ BENGALI VOWEL SIGN VOCALIC R
        "R^I"   :   "\u09C4", // $ৄ BENGALI VOWEL SIGN VOCALIC RR
        "RRI"   :   "\u09C4", // $ৄ BENGALI VOWEL SIGN VOCALIC RR
        //""    :   "\u09C5", // " <reserved>
        //""    :   "\u09C6", // " <reserved>
        "e"     :   "\u09C7", // $ে BENGALI VOWEL SIGN E • stands to the left of the consonant ** Manual Change ***
        "E"     :   "\u09C7", // $ে BENGALI VOWEL SIGN E • stands to the left of the consonant
        "ee"    :   "\u09C7", // $ে BENGALI VOWEL SIGN E • stands to the left of the consonant
        "ai"    :   "\u09C8", // $ৈ BENGALI VOWEL SIGN AI • stands to the left of the consonant

        // Sign
        "au"    :   "\u09D7", // $ৗ BENGALI AU LENGTH MARK

        // Additional vowels for Sanskrit
        "L^i"   :   "\u09E2", // $ৢ BENGALI VOWEL SIGN VOCALIC L
        "LLi"   :   "\u09E2", // $ৢ BENGALI VOWEL SIGN VOCALIC L
        "L^I"   :   "\u09E3", // $ৣ BENGALI VOWEL SIGN VOCALIC LL
        "LLI"   :   "\u09E3", // $ৣ BENGALI VOWEL SIGN VOCALIC LL

        // Two-part dependent vowel signs These vowel signs have glyph pieces which stand on both sides of the consonant; they follow the consonant in logical order, and should be handled as a unit for most processing.
        "o"     :   "\u09CB", // $ো BENGALI VOWEL SIGN O ≡ 09C7   $ে   09BE  $া   ** Manual Change ***
        "O"     :   "\u09CB", // $ো BENGALI VOWEL SIGN O ≡ 09C7   $ে   09BE  $া
        "oo"     :   "\u09CB", // $ো BENGALI VOWEL SIGN O ≡ 09C7   $ে   09BE  $া
        "au"    :   "\u09CC"  // $ৌ BENGALI VOWEL SIGN AU ≡ 09C7   $ে   09D7  $ৗ
    },

    "Consonants": { // ()+
        "k"     :   "\u0995", // ক BENGALI LETTER KA
        "kh"    :   "\u0996", // খ BENGALI LETTER KHA
        "g"     :   "\u0997", // গ BENGALI LETTER GA
        "gh"    :   "\u0998", // ঘ BENGALI LETTER GHA
        "~N"    :   "\u0999", // ঙ BENGALI LETTER NGA
        "N^"    :   "\u0999", // ঙ BENGALI LETTER NGA
        "ch"    :   "\u099A", // চ BENGALI LETTER CA
        "Ch"    :   "\u099B", // ছ BENGALI LETTER CHA
        "chh"   :   "\u099B", // ছ BENGALI LETTER CHA
        "j"     :   "\u099C", // জ BENGALI LETTER JA
        "jh"    :   "\u099D", // ঝ BENGALI LETTER JHA
        "~n"    :   "\u099E", // ঞ BENGALI LETTER NYA
        "n^"    :   "\u099E", // ঞ BENGALI LETTER NYA
        "JN"    :   "\u099E", // ঞ BENGALI LETTER NYA
        "T"     :   "\u099F", // ট BENGALI LETTER TTA
        "Th"    :   "\u09A0", // ঠ BENGALI LETTER TTHA
        "D"     :   "\u09A1", // ড BENGALI LETTER DDA
        "Dh"    :   "\u09A2", // ঢ BENGALI LETTER DDHA
        "N"     :   "\u09A3", // ণ BENGALI LETTER NNA
        "t"     :   "\u09A4", // ত BENGALI LETTER TA
        "th"    :   "\u09A5", // থ BENGALI LETTER THA
        "d"     :   "\u09A6", // দ BENGALI LETTER DA
        "dh"    :   "\u09A7", // ধ BENGALI LETTER DHA
        "n"     :   "\u09A8", // ন BENGALI LETTER NA
        //""    :   "\u09A9", // " <reserved>
        "p"     :   "\u09AA", // প BENGALI LETTER PA
        "ph"    :   "\u09AB", // ফ BENGALI LETTER PHA
        "w"     :   "\u09AC", // ব BENGALI LETTER BA = Bengali va, wa
        "v"     :   "\u09AC", // ব BENGALI LETTER BA = Bengali va, wa
        "b"     :   "\u09AC", // ব BENGALI LETTER BA = Bengali va, wa
        "bh"    :   "\u09AD", // ভ BENGALI LETTER BHA
        "m"     :   "\u09AE", // ম BENGALI LETTER MA
        "J"     :   "\u09AF", // য BENGALI LETTER YA
        "y"     :   "\u09AF", // য BENGALI LETTER YA
        "r"     :   "\u09B0", // র BENGALI LETTER RA
        //""    :   "\u09B1", // " <reserved>
        "L"     :   "\u09B2", // ল BENGALI LETTER LA ** Manual Change ***
        "l"     :   "\u09B2", // ল BENGALI LETTER LA
        //""    :   "\u09B3", // " <reserved>
        //""    :   "\u09B4", // " <reserved>
        //""    :   "\u09B5", // " <reserved>
        "sh"    :   "\u09B6", // শ BENGALI LETTER SHA
        "Sh"    :   "\u09B7", // ষ BENGALI LETTER SSA
        "shh"   :   "\u09B7", // ষ BENGALI LETTER SSA
        "s"     :   "\u09B8", // স BENGALI LETTER SA
        "h"     :   "\u09B9", // হ BENGALI LETTER HA

        // Manually Added
        "x"     :   "\u0995"+"\u09CD"+"\u09B7", // क्ष == "kSh"
        "GY"    :   "\u099C"+"\u09CD"+"\u099E", // == "j~n"

        // Additional consonants
        "R"     :   "\u09DC", // ড় BENGALI LETTER RRA ≡ 09A1  ড   09BC  $়
        ".D"    :   "\u09DC", // ড় BENGALI LETTER RRA ≡ 09A1  ড   09BC  $়
        ".Dh"   :   "\u09DD", // ঢ় BENGALI LETTER RHA ≡ 09A2  ঢ   09BC  $়
        //""    :   "\u09DE", // " <reserved>
        "Y"     :   "\u09DF"  // য় BENGALI LETTER YYA ≡ 09AF  য   09BC  $়

        // Additions for Assamese
        //""    :   "\u09F0", // ৰ BENGALI LETTER RA WITH MIDDLE DIAGONAL
        //""    :   "\u09F1", // ৱ BENGALI LETTER RA WITH LOWER DIAGONAL = bengali letter va with lower diagonal (1.0)
    },

    "Accent_marks": {
        "\u200B":   "\u200B", // ZERO WIDTH SPACE (ZWSP)
        "\u200D":   "\u200D", // ZERO WIDTH JOINER (ZWJ)
        // Hack to handle accent marks, if used in Indian scripts or if language specific accent marks does not exist
        "\u0300":   "\u0300", // $॓ GRAVE ACCENT → 0300 $̀   combining grave accent
        "\u0301":   "\u0301", // $॔ ACUTE ACCENT → 0301 $́   combining acute accent
        "\u0307":   "\u0307", // ॱ SIGN HIGH SPACING DOT
        "\u030A":   "\u030A", // ॰ ABBREVIATION SIGN • intended for Devanagari-specific abbreviations
        "\u030D":   "\u030D", // $॑ STRESS SIGN UDATTA = Vedic tone svarita
        "\u0323":   "\u0323", // $़ SIGN NUKTA • for extending the alphabet to new letters
        "\u0332":   "\u0332", // $॒ STRESS SIGN ANUDATTA = Vedic tone anudatta

        // Various signs
        "\u0323":   "\u09BC"  // $় BENGALI SIGN NUKTA • for extending the alphabet to new letters
    },

    "Others": { // ()
        // Various signs
        ".N"    :   "\u0981", // $ঁ BENGALI SIGN CANDRABINDU
        ".m"    :   "\u0982", // $ং BENGALI SIGN ANUSVARA
        ".n"    :   "\u0982", // $ং BENGALI SIGN ANUSVARA
        "M"     :   "\u0982", // $ং BENGALI SIGN ANUSVARA
        "H"     :   "\u0983", // $ঃ BENGALI SIGN VISARGA
        ".a"    :   "\u09BD", // ঽ BENGALI SIGN AVAGRAHA
        ".h"    :   "\u09CD", // $ BENGALI SIGN VIRAMA

        // Additional consonant
        "t"     :  "\u09CE",  // ৎ BENGALI LETTER KHANDA TA • a dead consonant form of ta, without implicit vowel, used in some sequences

        // Reserved For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u09E4", // " <reserved> → 0964  ।   devanagari danda
        //""    :   "\u09E5", // " <reserved> → 0965  ॥   devanagari double danda

        // Digits
        "0"     :   "\u09E6", // ০ BENGALI DIGIT ZERO
        "1"     :   "\u09E7", // ১ BENGALI DIGIT ONE
        "2"     :   "\u09E8", // ২ BENGALI DIGIT TWO
        "3"     :   "\u09E9", // ৩ BENGALI DIGIT THREE
        "4"     :   "\u09EA", // ৪ BENGALI DIGIT FOUR
        "5"     :   "\u09EB", // ৫ BENGALI DIGIT FIVE
        "6"     :   "\u09EC", // ৬ BENGALI DIGIT SIX
        "7"     :   "\u09ED", // ৭ BENGALI DIGIT SEVEN
        "8"     :   "\u09EE", // ৮ BENGALI DIGIT EIGHT
        "9"     :   "\u09EF", // ৯ BENGALI DIGIT NINE

        // Currency signs
        //""    :   "\u09F2", // ৲ BENGALI RUPEE MARK = taka • historic currency sign
        //""    :   "\u09F3", // ৳ BENGALI RUPEE SIGN = Bangladeshi taka

        // Historic currency sign
        //""    :   "\u09FB", // ৻ BENGALI GANDA MARK

        // Historic symbols for fractional values The use of these signs is not limited to currency, despite the character names.
        //""    :   "\u09F4", // ৴ BENGALI CURRENCY NUMERATOR ONE • not in current usage
        //""    :   "\u09F5", // ৵ BENGALI CURRENCY NUMERATOR TWO • not in current usage
        //""    :   "\u09F6", // ৶ BENGALI CURRENCY NUMERATOR THREE • not in current usage
        //""    :   "\u09F7", // ৷ BENGALI CURRENCY NUMERATOR FOUR
        //""    :   "\u09F8", // ৸ BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR
        //""    :   "\u09F9", // ৹ BENGALI CURRENCY DENOMINATOR SIXTEEN

        // Sign
        //""    :   "\u09FA", // ৺ BENGALI ISSHAR = ishvar • represents the name of a deity = svargiya • written before the name of a deceased person

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u09CD"  // $ BENGALI SIGN VIRAMA = hasant (Bengali term for halant)
};