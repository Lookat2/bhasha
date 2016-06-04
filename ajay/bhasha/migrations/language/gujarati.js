exports.gujarati = {
    // http://www.aczoom.com/itrans/html/gujdoc/node4.html
    // **** incomplete *** last table from the link...

    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0A85", // અ GUJARATI LETTER A
        "A"     :   "\u0A86", // આ GUJARATI LETTER AA
        "aa"    :   "\u0A86", // આ GUJARATI LETTER AA
        "i"     :   "\u0A87", // ઇ GUJARATI LETTER I
        "I"     :   "\u0A88", // ઈ GUJARATI LETTER II
        "ii"    :   "\u0A88", // ઈ GUJARATI LETTER II
        "u"     :   "\u0A89", // ઉ GUJARATI LETTER U
        "U"     :   "\u0A8A", // ઊ GUJARATI LETTER UU
        "uu"    :   "\u0A8A", // ઊ GUJARATI LETTER UU
        "R^i"   :   "\u0A8B", // ઋ GUJARATI LETTER VOCALIC R
        "RRi"   :   "\u0A8B", // ઋ GUJARATI LETTER VOCALIC R
        "L^i"   :   "\u0A8C", // ઌ GUJARATI LETTER VOCALIC L • used with Sanskrit text
        "LLi"   :   "\u0A8C", // ઌ GUJARATI LETTER VOCALIC L • used with Sanskrit text
        "a.c"   :   "\u0A8D", // ઍ GUJARATI VOWEL CANDRA E ** Manual Change ***
        //""    :   "\u0A8E", // " <reserved>
        "e"     :   "\u0A8F", // એ GUJARATI LETTER E ** Manual Change ***
        "E"     :   "\u0A8F", // એ GUJARATI LETTER E
        "ee"    :   "\u0A8F", // એ GUJARATI LETTER E
        "ai"    :   "\u0A90", // ઐ GUJARATI LETTER AI
        "A.c"   :   "\u0A91", // ઑ GUJARATI VOWEL CANDRA O ** Manual Change ***
        "aa.c"  :   "\u0A91", // ઑ GUJARATI VOWEL CANDRA O ** Manual Change ***
        //""    :   "\u0A92", // " <reserved>
        "o"     :   "\u0A93", // ઓ GUJARATI LETTER O ** Manual Change ***
        "O"     :   "\u0A93", // ઓ GUJARATI LETTER O
        "oo"    :   "\u0A93", // ઓ GUJARATI LETTER O
        "au"    :   "\u0A94", // ઔ GUJARATI LETTER AU

        // Additional vowels for Sanskrit
        "R^I"   :   "\u0AE0", // ૠ GUJARATI LETTER VOCALIC RR
        "RRI"   :   "\u0AE0", // ૠ GUJARATI LETTER VOCALIC RR
        "L^I"   :   "\u0AE1", // ૡ GUJARATI LETTER VOCALIC LL
        "LLI"   :   "\u0AE1", // ૡ GUJARATI LETTER VOCALIC LL

        // Various signs
        "AUM"   :   "\u0950", // ADDED DEVANAGARI ॐ for reverse conversion, if used
        "OM"    :   "\u0AD0", // ૐ GUJARATI OM
        "ooM"   :   "\u0AD0", // ૐ GUJARATI OM
        "AUM"   :   "\u0AD0"  // ૐ GUJARATI OM
    },

    "Dependent_vowel": { // +()
        // Dependent vowel signs
        "a"     :   "",       // ADDED
        "A"     :   "\u0ABE", // $ા GUJARATI VOWEL SIGN AA
        "aa"    :   "\u0ABE", // $ા GUJARATI VOWEL SIGN AA
        "i"     :   "\u0ABF", // $િ GUJARATI VOWEL SIGN I • stands to the left of the consonant
        "I"     :   "\u0AC0", // $ી GUJARATI VOWEL SIGN II
        "ii"    :   "\u0AC0", // $ી GUJARATI VOWEL SIGN II
        "u"     :   "\u0AC1", // $ુ GUJARATI VOWEL SIGN U
        "U"     :   "\u0AC2", // $ૂ GUJARATI VOWEL SIGN UU
        "uu"    :   "\u0AC2", // $ૂ GUJARATI VOWEL SIGN UU
        "R^i"   :   "\u0AC3", // $ૃ GUJARATI VOWEL SIGN VOCALIC R
        "RRi"   :   "\u0AC3", // $ૃ GUJARATI VOWEL SIGN VOCALIC R
        "R^I"   :   "\u0AC4", // $ૄ GUJARATI VOWEL SIGN VOCALIC RR
        "RRI"   :   "\u0AC4", // $ૄ GUJARATI VOWEL SIGN VOCALIC RR
        "a.c"   :   "\u0AC5", // $ૅ GUJARATI VOWEL SIGN CANDRA E ** Manual Change ***
        //""    :   "\u0AC6", // " <reserved>
        "e"     :   "\u0AC7", // $ે GUJARATI VOWEL SIGN E ** Manual Change ***
        "E"     :   "\u0AC7", // $ે GUJARATI VOWEL SIGN E
        "ee"    :   "\u0AC7", // $ે GUJARATI VOWEL SIGN E
        "ai"    :   "\u0AC8", // $ૈ GUJARATI VOWEL SIGN AI
        "A.c"   :   "\u0AC9", // $ૉ GUJARATI VOWEL SIGN CANDRA O ** Manual Change ***
        "aa.c"  :   "\u0AC9", // $ૉ GUJARATI VOWEL SIGN CANDRA O ** Manual Change ***
        //""    :   "\u0ACA", // " <reserved>
        "o"     :   "\u0ACB", // $ો GUJARATI VOWEL SIGN O ** Manual Change ***
        "O"     :   "\u0ACB", // $ો GUJARATI VOWEL SIGN O
        "oo"    :   "\u0ACB", // $ો GUJARATI VOWEL SIGN O
        "au"    :   "\u0ACC", // $ૌ GUJARATI VOWEL SIGN AU

        // Additional vowels for Sanskrit
        "L^i"   :   "\u0AE2", // $ૢ GUJARATI VOWEL SIGN VOCALIC L
        "LLi"   :   "\u0AE2", // $ૢ GUJARATI VOWEL SIGN VOCALIC L
        "L^I"   :   "\u0AE3", // $ૣ GUJARATI VOWEL SIGN VOCALIC LL
        "LLI"   :   "\u0AE3"  // $ૣ GUJARATI VOWEL SIGN VOCALIC LL
    },

    "Consonants": { // ()+
        // Consonants
        "k"     :   "\u0A95", // ક GUJARATI LETTER KA
        "kh"    :   "\u0A96", // ખ GUJARATI LETTER KHA
        "g"     :   "\u0A97", // ગ GUJARATI LETTER GA
        "gh"    :   "\u0A98", // ઘ GUJARATI LETTER GHA
        "~N"    :   "\u0A99", // ઙ GUJARATI LETTER NGA
        "N^"    :   "\u0A99", // ઙ GUJARATI LETTER NGA
        "ch"    :   "\u0A9A", // ચ GUJARATI LETTER CA
        "Ch"    :   "\u0A9B", // છ GUJARATI LETTER CHA
        "chh"   :   "\u0A9B", // છ GUJARATI LETTER CHA
        "j"     :   "\u0A9C", // જ GUJARATI LETTER JA
        "jh"    :   "\u0A9D", // ઝ GUJARATI LETTER JHA
        "~n"    :   "\u0A9E", // ઞ GUJARATI LETTER NYA
        "n^"    :   "\u0A9E", // ઞ GUJARATI LETTER NYA
        "JN"    :   "\u0A9E", // ઞ GUJARATI LETTER NYA
        "T"     :   "\u0A9F", // ટ GUJARATI LETTER TTA
        "Th"    :   "\u0AA0", // ઠ GUJARATI LETTER TTHA
        "D"     :   "\u0AA1", // ડ GUJARATI LETTER DDA
        "Dh"    :   "\u0AA2", // ઢ GUJARATI LETTER DDHA
        "N"     :   "\u0AA3", // ણ GUJARATI LETTER NNA
        "t"     :   "\u0AA4", // ત GUJARATI LETTER TA
        "th"    :   "\u0AA5", // થ GUJARATI LETTER THA
        "d"     :   "\u0AA6", // દ GUJARATI LETTER DA
        "dh"    :   "\u0AA7", // ધ GUJARATI LETTER DHA
        "n"     :   "\u0AA8", // ન GUJARATI LETTER NA
        //""    :   "\u0AA9", // " <reserved>
        "p"     :   "\u0AAA", // પ GUJARATI LETTER PA
        "ph"    :   "\u0AAB", // ફ GUJARATI LETTER PHA
        "b"     :   "\u0AAC", // બ GUJARATI LETTER BA
        "bh"    :   "\u0AAD", // ભ GUJARATI LETTER BHA
        "m"     :   "\u0AAE", // મ GUJARATI LETTER MA
        "y"     :   "\u0AAF", // ય GUJARATI LETTER YA
        "r"     :   "\u0AB0", // ર GUJARATI LETTER RA
        //""    :   "\u0AB1", // " <reserved>
        "l"     :   "\u0AB2", // લ GUJARATI LETTER LA
        "L"     :   "\u0AB3", // ળ GUJARATI LETTER LLA
        //"ld"  :   "\u0AB3", // ળ GUJARATI LETTER LLA
        //""    :   "\u0AB4", // " <reserved>
        "w"     :   "\u0AB5", // વ GUJARATI LETTER VA
        "v"     :   "\u0AB5", // વ GUJARATI LETTER VA
        "sh"    :   "\u0AB6", // શ GUJARATI LETTER SHA
        "Sh"    :   "\u0AB7", // ષ GUJARATI LETTER SSA
        "shh"   :   "\u0AB7", // ષ GUJARATI LETTER SSA
        "s"     :   "\u0AB8", // સ GUJARATI LETTER SA
        "h"     :   "\u0AB9", // હ GUJARATI LETTER HA

        // Manually Added
        "x"     :   "\u0A95"+"\u0ACD"+"\u0AB7", // క్ష == "kSh"
        "GY"    :   "\u0A9C"+"\u0ACD"+"\u0A9E"  // == "j~n"
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
        "\u0323":   "\u0ABC"  // $઼ GUJARATI SIGN NUKTA • for extending the alphabet to new letters
    },

    "Others": { // ()
        // copied from Dependent vowels, for handling individual charecters
        ".c"    :   "\u0AC5", // $ૅ GUJARATI VOWEL SIGN CANDRA E ** Manual Change ***

        // Various signs
        ".N"    :   "\u0A81", // $ઁ GUJARATI SIGN CANDRABINDU
        ".m"    :   "\u0A82", // $ં GUJARATI SIGN ANUSVARA
        ".n"    :   "\u0A82", // $ં GUJARATI SIGN ANUSVARA
        "M"     :   "\u0A82", // $ં GUJARATI SIGN ANUSVARA
        "H"     :   "\u0A83", // $ઃ GUJARATI SIGN VISARGA
        ".a"    :   "\u0ABD", // ઽ GUJARATI SIGN AVAGRAHA
        ".h"    :   "\u0ACD", // $ GUJARATI SIGN VIRAMA

        // Reserved // For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0AE4", // " <reserved> → 0964 ।  devanagari danda
        //""    :   "\u0AE5", // " <reserved> → 0965 ॥  devanagari double danda

        // Digits
        "0"     :   "\u0AE6", // ૦ GUJARATI DIGIT ZERO
        "1"     :   "\u0AE7", // ૧ GUJARATI DIGIT ONE
        "2"     :   "\u0AE8", // ૨ GUJARATI DIGIT TWO
        "3"     :   "\u0AE9", // ૩ GUJARATI DIGIT THREE
        "4"     :   "\u0AEA", // ૪ GUJARATI DIGIT FOUR
        "5"     :   "\u0AEB", // ૫ GUJARATI DIGIT FIVE
        "6"     :   "\u0AEC", // ૬ GUJARATI DIGIT SIX
        "7"     :   "\u0AED", // ૭ GUJARATI DIGIT SEVEN
        "8"     :   "\u0AEE", // ૮ GUJARATI DIGIT EIGHT
        "9"     :   "\u0AEF", // ૯ GUJARATI DIGIT NINE

        // Abbreviation sign
        //""    :   "\u0AF0", // ૰ GUJARATI ABBREVIATION SIGN

        // Currency sign
        //""    :   "\u0AF1", // ૱ GUJARATI RUPEE SIGN • preferred spelling is 0AB0 ર   0AC2 $ૂ   0AF0 ૰

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u0ACD"  // $ GUJARATI SIGN VIRAMA
};