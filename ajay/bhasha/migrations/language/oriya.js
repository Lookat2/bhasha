exports.oriya = {
    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0B05", // ଅ ORIYA LETTER A
        "A"     :   "\u0B06", // ଆ ORIYA LETTER AA
        "aa"    :   "\u0B06", // ଆ ORIYA LETTER AA
        "i"     :   "\u0B07", // ଇ ORIYA LETTER I
        "I"     :   "\u0B08", // ଈ ORIYA LETTER II
        "ii"    :   "\u0B08", // ଈ ORIYA LETTER II
        "u"     :   "\u0B09", // ଉ ORIYA LETTER U
        "U"     :   "\u0B0A", // ଊ ORIYA LETTER UU
        "uu"    :   "\u0B0A", // ଊ ORIYA LETTER UU
        "R^i"   :   "\u0B0B", // ଋ ORIYA LETTER VOCALIC R
        "RRi"   :   "\u0B0B", // ଋ ORIYA LETTER VOCALIC R
        "L^I"   :   "\u0B0C", // ଌ ORIYA LETTER VOCALIC L
        "LLI"   :   "\u0B0C", // ଌ ORIYA LETTER VOCALIC L
        //""    :   "\u0B0D", // " <reserved>
        //""    :   "\u0B0E", // " <reserved>
        "e"     :   "\u0B0F", // ଏ ORIYA LETTER E
        "E"     :   "\u0B0F", // ଏ ORIYA LETTER E
        "ee"    :   "\u0B0F", // ଏ ORIYA LETTER E
        "ai"    :   "\u0B10", // ଐ ORIYA LETTER AI
        //""    :   "\u0B11", // " <reserved>
        //""    :   "\u0B12", // " <reserved>
        "o"     :   "\u0B13", // ଓ ORIYA LETTER O
        "O"     :   "\u0B13", // ଓ ORIYA LETTER O
        "oo"    :   "\u0B13", // ଓ ORIYA LETTER O
        "au"    :   "\u0B14", // ଔ ORIYA LETTER AU

        // Additional vowels for Sanskrit
        "R^I"   :   "\u0B60", // ୠ ORIYA LETTER VOCALIC RR
        "RRI"   :   "\u0B60", // ୠ ORIYA LETTER VOCALIC RR
        "L^I"   :   "\u0B61", // ୡ ORIYA LETTER VOCALIC LL
        "LLI"   :   "\u0B61", // ୡ ORIYA LETTER VOCALIC LL

        // Sign: Manually added from Devanagari
        "OM"    :   "\u0950", // ॐ
        "ooM"   :   "\u0950", // ॐ
        "AUM"   :   "\u0950"  // ॐ
    },

    "Dependent_vowel": { // +()
    // Dependent vowel signs
        "a"     :   "",       // ADDED
        "A"     :   "\u0B3E", // $ା ORIYA VOWEL SIGN AA
        "aa"    :   "\u0B3E", // $ା ORIYA VOWEL SIGN AA
        "i"     :   "\u0B3F", // $ି ORIYA VOWEL SIGN I
        "I"     :   "\u0B40", // $ୀ ORIYA VOWEL SIGN II
        "ii"    :   "\u0B40", // $ୀ ORIYA VOWEL SIGN II
        "u"     :   "\u0B41", // $ୁ ORIYA VOWEL SIGN U
        "U"     :   "\u0B42", // $ୂ ORIYA VOWEL SIGN UU
        "uu"    :   "\u0B42", // $ୂ ORIYA VOWEL SIGN UU
        "R^i"   :   "\u0B43", // $ୃ ORIYA VOWEL SIGN VOCALIC R
        "RRi"   :   "\u0B43", // $ୃ ORIYA VOWEL SIGN VOCALIC R
        "R^I"   :   "\u0B44", // $ୄ ORIYA VOWEL SIGN VOCALIC RR
        "RRI"   :   "\u0B44", // $ୄ ORIYA VOWEL SIGN VOCALIC RR
        //""    :   "\u0B45", // " <reserved>
        //""    :   "\u0B46", // " <reserved>
        "e"     :   "\u0B47", // $େ ORIYA VOWEL SIGN E • stands to the left of the consonant
        "E"     :   "\u0B47", // $େ ORIYA VOWEL SIGN E • stands to the left of the consonant
        "ee"    :   "\u0B47", // $େ ORIYA VOWEL SIGN E • stands to the left of the consonant
        "ai"    :   "\u0B48", // $ୈ ORIYA VOWEL SIGN AI • pieces left of and above the consonant ≡ 0B47   $େ   0B56  $ୖ

        // Two-part dependent vowel signs These vowel signs have glyph pieces which stand on both sides of the consonant; they follow the consonant in logical order, and should be handled as a unit for most processing.
        "o"     :   "\u0B4B", // $ୋ ORIYA VOWEL SIGN O ≡ 0B47   $େ   0B3E  $ା
        "O"     :   "\u0B4B", // $ୋ ORIYA VOWEL SIGN O ≡ 0B47   $େ   0B3E  $ା
        "oo"    :   "\u0B4B", // $ୋ ORIYA VOWEL SIGN O ≡ 0B47   $େ   0B3E  $ା
        "au"    :   "\u0B4C", // $ୌ ORIYA VOWEL SIGN AU ≡ 0B47   $େ   0B57  ୗ

    // Dependent vowels
        "L^i"   :   "\u0B62", // $ୢ ORIYA VOWEL SIGN VOCALIC L
        "LLi"   :   "\u0B62", // $ୢ ORIYA VOWEL SIGN VOCALIC L
        "L^I"   :   "\u0B63", // $ୣ ORIYA VOWEL SIGN VOCALIC LL
        "LLI"   :   "\u0B63"  // $ୣ ORIYA VOWEL SIGN VOCALIC LL
    },

    "Consonants": { // ()+
        // Consonants
        "k"     :   "\u0B15", // କ ORIYA LETTER KA
        "kh"    :   "\u0B16", // ଖ ORIYA LETTER KHA
        "g"     :   "\u0B17", // ଗ ORIYA LETTER GA
        "gh"    :   "\u0B18", // ଘ ORIYA LETTER GHA
        "~N"    :   "\u0B19", // ଙ ORIYA LETTER NGA
        "N^"    :   "\u0B19", // ଙ ORIYA LETTER NGA
        "ch"    :   "\u0B1A", // ଚ ORIYA LETTER CA
        "Ch"    :   "\u0B1B", // ଛ ORIYA LETTER CHA
        "chh"   :   "\u0B1B", // ଛ ORIYA LETTER CHA
        "j"     :   "\u0B1C", // ଜ ORIYA LETTER JA
        "jh"    :   "\u0B1D", // ଝ ORIYA LETTER JHA
        "~n"    :   "\u0B1E", // ଞ ORIYA LETTER NYA
        "n^"    :   "\u0B1E", // ଞ ORIYA LETTER NYA
        "JN"    :   "\u0B1E", // ଞ ORIYA LETTER NYA
        "T"     :   "\u0B1F", // ଟ ORIYA LETTER TTA
        "Th"    :   "\u0B20", // ଠ ORIYA LETTER TTHA
        "D"     :   "\u0B21", // ଡ ORIYA LETTER DDA
        "Dh"    :   "\u0B22", // ଢ ORIYA LETTER DDHA
        "N"     :   "\u0B23", // ଣ ORIYA LETTER NNA
        "t"     :   "\u0B24", // ତ ORIYA LETTER TA
        "th"    :   "\u0B25", // ଥ ORIYA LETTER THA
        "d"     :   "\u0B26", // ଦ ORIYA LETTER DA
        "dh"    :   "\u0B27", // ଧ ORIYA LETTER DHA
        "n"     :   "\u0B28", // ନ ORIYA LETTER NA
        //""    :   "\u0B29", // " <reserved>
        "p"     :   "\u0B2A", // ପ ORIYA LETTER PA
        "ph"    :   "\u0B2B", // ଫ ORIYA LETTER PHA
        "b"     :   "\u0B2C", // ବ ORIYA LETTER BA → 0B35  ଵ   oriya letter va
        "bh"    :   "\u0B2D", // ଭ ORIYA LETTER BHA
        "m"     :   "\u0B2E", // ମ ORIYA LETTER MA
        "y"     :   "\u0B2F", // ଯ ORIYA LETTER YA = ja
        "r"     :   "\u0B30", // ର ORIYA LETTER RA
        //""    :   "\u0B31", // " <reserved>
        "l"     :   "\u0B32", // ଲ ORIYA LETTER LA
        "L"     :   "\u0B33", // ଳ ORIYA LETTER LLA
        //""    :   "\u0B34", // " <reserved>
        "w"     :   "\u0B35", // ଵ ORIYA LETTER VA → 0B2C  ବ   oriya letter ba
        "v"     :   "\u0B35", // ଵ ORIYA LETTER VA → 0B2C  ବ   oriya letter ba
        "sh"    :   "\u0B36", // ଶ ORIYA LETTER SHA
        "Sh"    :   "\u0B37", // ଷ ORIYA LETTER SSA
        "shh"   :   "\u0B37", // ଷ ORIYA LETTER SSA
        "s"     :   "\u0B38", // ସ ORIYA LETTER SA
        "h"     :   "\u0B39", // ହ ORIYA LETTER HA

        // Manually Added
        "x"     :   "\u0B15"+"\u0B4D"+"\u0B37", // क्ष == "kSh"
        "GY"    :   "\u0B1C"+"\u0B4D"+"\u0B1E"  // == "j~n"

        // Additional consonants
        //""    :   "\u0B5C", // ଡ଼ ORIYA LETTER RRA = dda ≡ 0B21  ଡ   0B3C  $଼
        //""    :   "\u0B5D", // ଢ଼ ORIYA LETTER RHA = ddha ≡ 0B22  ଢ   0B3C  $଼
        //""    :   "\u0B5E", // " <reserved>
        //""    :   "\u0B5F", // ୟ ORIYA LETTER YYA = ya

        // Additional consonant
        //""    :   "\u0B71", // ୱ ORIYA LETTER WA → 0B13  ଓ   oriya letter o → 0B35  ଵ   oriya letter va

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
        "\u0323":   "\u0B3C" // $଼ ORIYA SIGN NUKTA • for extending the alphabet to new letters
    },

    "Others": { // ()
        // Various signs
        ".N"    :   "\u0B01", // $ଁ ORIYA SIGN CANDRABINDU
        ".m"    :   "\u0B02", // $ଂ ORIYA SIGN ANUSVARA
        ".n"    :   "\u0B02", // $ଂ ORIYA SIGN ANUSVARA
        "M"     :   "\u0B02", // $ଂ ORIYA SIGN ANUSVARA
        "H"     :   "\u0B03", // $ଃ ORIYA SIGN VISARGA
        ".a"    :   "\u0B3D", // ଽ ORIYA SIGN AVAGRAHA
        ".h"    :   "\u0B4D", // $୍ ORIYA SIGN VIRAMA

        // Various signs
        //""    :   "\u0B56", // $ୖ ORIYA AI LENGTH MARK
        //""    :   "\u0B57", //  ୗ ORIYA AU LENGTH MARK

        // Reserved For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0B64", // " <reserved> → 0964  ।   devanagari danda
        //""    :   "\u0B65", // " <reserved> → 0965  ॥   devanagari double danda

        // Digits
        "0"     :   "\u0B66", // ୦ ORIYA DIGIT ZERO
        "1"     :   "\u0B67", // ୧  ORIYA DIGIT ONE
        "2"     :   "\u0B68", // ୨  ORIYA DIGIT TWO
        "3"     :   "\u0B69", // ୩ ORIYA DIGIT THREE
        "4"     :   "\u0B6A", // ୪  ORIYA DIGIT FOUR
        "5"     :   "\u0B6B", // ୫  ORIYA DIGIT FIVE
        "6"     :   "\u0B6C", // ୬  ORIYA DIGIT SIX
        "7"     :   "\u0B6D", // ୭  ORIYA DIGIT SEVEN
        "8"     :   "\u0B6E", // ୮   ORIYA DIGIT EIGHT
        "9"     :   "\u0B6F", // ୯   ORIYA DIGIT NINE

        // Sign
        //""    :   "\u0B70", // ୰ ORIYA ISSHAR

        // Fraction signs
        //""    :   "\u0B72", // ୲ ORIYA FRACTION ONE QUARTER
        //""    :   "\u0B73", // ୳ ORIYA FRACTION ONE HALF
        //""    :   "\u0B74", // ୴ ORIYA FRACTION THREE QUARTERS
        //""    :   "\u0B75", // ୵ ORIYA FRACTION ONE SIXTEENTH
        //""    :   "\u0B76", // ୶ ORIYA FRACTION ONE EIGHTH
        //""    :   "\u0B77", // ୷ ORIYA FRACTION THREE SIXTEENTHS

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u0B4D" // $୍ ORIYA SIGN VIRAMA
};