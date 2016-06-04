exports.malayalam = {
    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0D05", // അ MALAYALAM LETTER A
        "A"     :   "\u0D06", // ആ MALAYALAM LETTER AA
        "aa"    :   "\u0D06", // ആ MALAYALAM LETTER AA
        "i"     :   "\u0D07", // ഇ MALAYALAM LETTER I
        "I"     :   "\u0D08", // ഈ MALAYALAM LETTER II
        "ii"    :   "\u0D08", // ഈ MALAYALAM LETTER II
        "u"     :   "\u0D09", // ഉ MALAYALAM LETTER U
        "U"     :   "\u0D0A", // ഊ MALAYALAM LETTER UU
        "uu"    :   "\u0D0A", // ഊ MALAYALAM LETTER UU
        "R^i"   :   "\u0D0B", // ഋ MALAYALAM LETTER VOCALIC R
        "RRi"   :   "\u0D0B", // ഋ MALAYALAM LETTER VOCALIC R
        "L^i"   :   "\u0D0C", // ഌ MALAYALAM LETTER VOCALIC L
        "LLi"   :   "\u0D0C", // ഌ MALAYALAM LETTER VOCALIC L
        //""    :   "\u0D0D", // " <reserved>
        "e"     :   "\u0D0E", // എ MALAYALAM LETTER E
        "E"     :   "\u0D0F", // ഏ MALAYALAM LETTER EE
        "ee"    :   "\u0D0F", // ഏ MALAYALAM LETTER EE
        "ai"    :   "\u0D10", // ഐ MALAYALAM LETTER AI
        //""    :   "\u0D11", // " <reserved>
        "o"     :   "\u0D12", // ഒ MALAYALAM LETTER O
        "O"     :   "\u0D13", // ഓ MALAYALAM LETTER OO
        "oo"    :   "\u0D13", // ഓ MALAYALAM LETTER OO
        "au"    :   "\u0D14", // ഔ MALAYALAM LETTER AU

        // Additional vowels for Sanskrit
        "R^I"   :   "\u0D60", // ൠ MALAYALAM LETTER VOCALIC RR
        "RRI"   :   "\u0D60", // ൠ MALAYALAM LETTER VOCALIC RR
        "L^I"   :   "\u0D61", // ൡ MALAYALAM LETTER VOCALIC LL
        "LLI"   :   "\u0D61", // ൡ MALAYALAM LETTER VOCALIC LL

        // Sign: Manually added from Devanagari
        "OM"    :   "\u0950", // ॐ
        "ooM"   :   "\u0950", // ॐ
        "AUM"   :   "\u0950"  // ॐ
    },

    "Dependent_vowel": { // +()
        // Dependent vowel signs
        "a"     :   "",       // ADDED
        "aa"    :   "\u0D3E", // $ ാ MALAYALAM VOWEL SIGN AA
        "i"     :   "\u0D3F", // $ ി MALAYALAM VOWEL SIGN I
        "I"     :   "\u0D40", // $ ീ MALAYALAM VOWEL SIGN II
        "ii"    :   "\u0D40", // $ ീ MALAYALAM VOWEL SIGN II
        "u"     :   "\u0D41", // $ ു MALAYALAM VOWEL SIGN U
        "U"     :   "\u0D42", // $ ൂ MALAYALAM VOWEL SIGN UU
        "uu"    :   "\u0D42", // $ ൂ MALAYALAM VOWEL SIGN UU
        "R^i"   :   "\u0D43", // $ ൃ MALAYALAM VOWEL SIGN VOCALIC R
        "RRi"   :   "\u0D43", // $ ൃ MALAYALAM VOWEL SIGN VOCALIC R
        "R^I"   :   "\u0D44", // $ ൄ MALAYALAM VOWEL SIGN VOCALIC RR
        "RRI"   :   "\u0D44", // $ ൄ MALAYALAM VOWEL SIGN VOCALIC RR
        //""    :   "\u0D45", // " <reserved>
        "e"     :   "\u0D46", // $ െ MALAYALAM VOWEL SIGN E • stands to the left of the consonant
        "E"     :   "\u0D47", // $ േ MALAYALAM VOWEL SIGN EE • stands to the left of the consonant
        "ee"    :   "\u0D47", // $ േ MALAYALAM VOWEL SIGN EE • stands to the left of the consonant
        "ai"    :   "\u0D48", // $ ൈ MALAYALAM VOWEL SIGN AI • stands to the left of the consonant

        // Two-part dependent vowel signs
        // These vowel signs have glyph pieces which stand on both sides of the consonant; they follow the consonant in logical order, and should be handled as a unit for most processing.
        "o"     :   "\u0D4A", // $ ൊ MALAYALAM VOWEL SIGN O ≡ 0D46  $ െ   0D3E  $ ാ
        "O"     :   "\u0D4B", // $ ോ MALAYALAM VOWEL SIGN OO ≡ 0D47  $ േ   0D3E  $ ാ
        "oo"    :   "\u0D4B", // $ ോ MALAYALAM VOWEL SIGN OO ≡ 0D47  $ േ   0D3E  $ ാ
        "au"    :   "\u0D4C", // $ ൌ MALAYALAM VOWEL SIGN AU • archaic form of the /au/ dependent vowel → 0D57  $ ൗ  malayalam au length mark ≡ 0D46  $ െ   0D57  $ ൗ

        // Dependent vowels
        "L^i"   :   "\u0D62", // $ ൢ MALAYALAM VOWEL SIGN VOCALIC L
        "LLi"   :   "\u0D62", // $ ൢ MALAYALAM VOWEL SIGN VOCALIC L
        "L^I"   :   "\u0D63", // $ ൣ MALAYALAM VOWEL SIGN VOCALIC LL
        "LLI"   :   "\u0D63"  // $ ൣ MALAYALAM VOWEL SIGN VOCALIC LL
    },

    "Consonants": { // ()+
        // Consonants
        // Alternate romanizations are shown as aliases for some letters to clarify their identity.
        "k"     :   "\u0D15", // ക MALAYALAM LETTER KA
        "kh"    :   "\u0D16", // ഖ MALAYALAM LETTER KHA
        "g"     :   "\u0D17", // ഗ MALAYALAM LETTER GA
        "gh"    :   "\u0D18", // ഘ MALAYALAM LETTER GHA
        "~N"    :   "\u0D19", // ങ MALAYALAM LETTER NGA
        "N^"    :   "\u0D19", // ങ MALAYALAM LETTER NGA
        "ch"    :   "\u0D1A", // ച MALAYALAM LETTER CA = cha
        "Ch"    :   "\u0D1B", // ഛ MALAYALAM LETTER CHA = chha
        "chh"   :   "\u0D1B", // ഛ MALAYALAM LETTER CHA = chha
        "j"     :   "\u0D1C", // ജ MALAYALAM LETTER JA
        "jh"    :   "\u0D1D", // ഝ MALAYALAM LETTER JHA
        "~n"    :   "\u0D1E", // ഞ MALAYALAM LETTER NYA = nha
        "n^"    :   "\u0D1E", // ഞ MALAYALAM LETTER NYA = nha
        "JN"    :   "\u0D1E", // ഞ MALAYALAM LETTER NYA = nha
        "T"     :   "\u0D1F", // ട MALAYALAM LETTER TTA = ta
        "Th"    :   "\u0D20", // ഠ MALAYALAM LETTER TTHA = tta
        "D"     :   "\u0D21", // ഡ MALAYALAM LETTER DDA = hard da
        "Dh"    :   "\u0D22", // ഢ MALAYALAM LETTER DDHA = hard dda
        "N"     :   "\u0D23", // ണ MALAYALAM LETTER NNA = hard na
        "t"     :   "\u0D24", // ത MALAYALAM LETTER TA = tha
        "th"    :   "\u0D25", // ഥ MALAYALAM LETTER THA = ttha
        "d"     :   "\u0D26", // ദ MALAYALAM LETTER DA = soft da
        "dh"    :   "\u0D27", // ധ MALAYALAM LETTER DHA = soft dda
        "n"     :   "\u0D28", // ന MALAYALAM LETTER NA
        "^n"    :   "\u0D29", // ഩ MALAYALAM LETTER NNNA • historic use only
        "p"     :   "\u0D2A", // പ MALAYALAM LETTER PA
        "ph"    :   "\u0D2B", // ഫ MALAYALAM LETTER PHA
        "b"     :   "\u0D2C", // ബ MALAYALAM LETTER BA
        "bh"    :   "\u0D2D", // ഭ MALAYALAM LETTER BHA
        "m"     :   "\u0D2E", // മ MALAYALAM LETTER MA
        "y"     :   "\u0D2F", // യ MALAYALAM LETTER YA
        "r"     :   "\u0D30", // ര MALAYALAM LETTER RA
        "R"     :   "\u0D31", // റ MALAYALAM LETTER RRA
        "l"     :   "\u0D32", // ല MALAYALAM LETTER LA
        "L"     :   "\u0D33", // ള MALAYALAM LETTER LLA
        //""    :   "\u0D34", // ഴ MALAYALAM LETTER LLLA = zha
        "w"     :   "\u0D35", // വ MALAYALAM LETTER VA
        "v"     :   "\u0D35", // വ MALAYALAM LETTER VA
        "sh"    :   "\u0D36", // ശ MALAYALAM LETTER SHA = soft sha
        "Sh"    :   "\u0D37", // ഷ MALAYALAM LETTER SSA = sha
        "shh"   :   "\u0D37", // ഷ MALAYALAM LETTER SSA = sha
        "s"     :   "\u0D38", // സ MALAYALAM LETTER SA
        "h"     :   "\u0D39", // ഹ MALAYALAM LETTER HA
        //""    :   "\u0D3A", // ഺ MALAYALAM LETTER TTTA • historic use only

        // Manually Added
        "x"     :   "\u0D15"+"\u0D4D"+"\u0D37", // क्ष == "kSh"
        "GY"    :   "\u0D1C"+"\u0D4D"+"\u0D1E"  // == "j~n"
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
        "\u0332":   "\u0332"  // $॒ STRESS SIGN ANUDATTA = Vedic tone anudatta

        // Dot reph
        //""    :   "\u0D4E"  // ൎ MALAYALAM LETTER DOT REPH • not used in reformed modern Malayalam orthography
    },

    "Others": { // ()
        // Various signs
        ".m"    :   "\u0D02", // $ ം MALAYALAM SIGN ANUSVARA
        ".n"    :   "\u0D02", // $ ം MALAYALAM SIGN ANUSVARA
        "M"     :   "\u0D02", // $ ം MALAYALAM SIGN ANUSVARA
        "H"     :   "\u0D03", // $ ഃ MALAYALAM SIGN VISARGA
        // Addition for Sanskrit
        ".a"    :   "\u0D3D", // ഽ MALAYALAM SIGN AVAGRAHA = praslesham
        ".h"    :   "\u0D4D", // $ ് MALAYALAM SIGN VIRAMA = chandrakkala (the preferred name) = vowel half-u

        // Various signs
        //""    :   "\u0D57", // $ ൗ MALAYALAM AU LENGTH MARK • used alone to write the /au/ dependent vowel in modern texts →
        //""    :   "\u0D4C", //  $ ൌ   malayalam vowel sign au

        // Reserved For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0D64", // " <reserved> → 0964  ।   devanagari danda
        //""    :   "\u0D65", // " <reserved> → 0965  ॥   devanagari double danda

        // Digits
        "0"     :   "\u0D66", // ൦ MALAYALAM DIGIT ZERO
        "1"     :   "\u0D67", // ൧ MALAYALAM DIGIT ONE
        "2"     :   "\u0D68", // ൨ MALAYALAM DIGIT TWO
        "3"     :   "\u0D69", // ൩ MALAYALAM DIGIT THREE
        "4"     :   "\u0D6A", // ൪ MALAYALAM DIGIT FOUR
        "5"     :   "\u0D6B", // ൫ MALAYALAM DIGIT FIVE
        "6"     :   "\u0D6C", // ൬ MALAYALAM DIGIT SIX
        "7"     :   "\u0D6D", // ൭ MALAYALAM DIGIT SEVEN
        "8"     :   "\u0D6E", // ൮ MALAYALAM DIGIT EIGHT
        "9"     :   "\u0D6F", // ൯ MALAYALAM DIGIT NINE

        // Malayalam numerics
        //""    :   "\u0D70", // ൰ MALAYALAM NUMBER TEN
        //""    :   "\u0D71", // ൱ MALAYALAM NUMBER ONE HUNDRED
        //""    :   "\u0D72", // ൲ MALAYALAM NUMBER ONE THOUSAND

        // Fractions
        //""    :   "\u0D73", // ൳ MALAYALAM FRACTION ONE QUARTER
        //""    :   "\u0D74", // ൴ MALAYALAM FRACTION ONE HALF
        //""    :   "\u0D75", // ൵ MALAYALAM FRACTION THREE QUARTERS

        // Date mark
        //""    :   "\u0D79", // ൹ MALAYALAM DATE MARK

        // Chillu letters
        //""    :   "\u0D7A", // ൺ MALAYALAM LETTER CHILLU NN
        //""    :   "\u0D7B", // ൻ MALAYALAM LETTER CHILLU N
        //""    :   "\u0D7C", // ർ MALAYALAM LETTER CHILLU RR • historically derived from the full letter ra • also used for chillu r
        //""    :   "\u0D7D", // ൽ MALAYALAM LETTER CHILLU L • historically derived from the full letter ta • used for chillu t and chillu d
        //""    :   "\u0D7E", // ൾ MALAYALAM LETTER CHILLU LL
        //""    :   "\u0D7F", // ൿ MALAYALAM LETTER CHILLU K

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u0D4D"  // $ ് MALAYALAM SIGN VIRAMA = chandrakkala (the preferred name) = vowel half-u
};