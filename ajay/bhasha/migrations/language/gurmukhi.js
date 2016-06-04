exports.gurmukhi = {
    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0A05", // ਅ GURMUKHI LETTER A = aira
        "A"     :   "\u0A06", // ਆ GURMUKHI LETTER AA
        "aa"    :   "\u0A06", // ਆ GURMUKHI LETTER AA
        "i"     :   "\u0A07", // ਇ GURMUKHI LETTER I
        "I"     :   "\u0A08", // ਈ GURMUKHI LETTER II
        "ii"    :   "\u0A08", // ਈ GURMUKHI LETTER II
        "u"     :   "\u0A09", // ਉ GURMUKHI LETTER U
        "U"     :   "\u0A0A", // ਊ GURMUKHI LETTER UU
        "uu"    :   "\u0A0A", // ਊ GURMUKHI LETTER UU
        //""    :   "\u0A0B", // " <reserved>
        //""    :   "\u0A0C", // " <reserved>
        //""    :   "\u0A0D", // " <reserved>
        //""    :   "\u0A0E", // " <reserved>
        "e"     :   "\u0A0F", // ਏ GURMUKHI LETTER EE
        "E"     :   "\u0A0F", // ਏ GURMUKHI LETTER EE
        "ee"    :   "\u0A0F", // ਏ GURMUKHI LETTER EE
        "ai"    :   "\u0A10", // ਐ GURMUKHI LETTER AI
        //""    :   "\u0A11", // " <reserved>
        //""    :   "\u0A12", // " <reserved>
        "o"     :   "\u0A13", // ਓ GURMUKHI LETTER OO
        "O"     :   "\u0A13", // ਓ GURMUKHI LETTER OO
        "oo"    :   "\u0A13", // ਓ GURMUKHI LETTER OO
        "au"    :   "\u0A14", // ਔ GURMUKHI LETTER AU

        // Sign: Manually added from Devanagari
        "OM"    :   "\u0950", // ॐ
        "ooM"   :   "\u0950", // ॐ
        "AUM"   :   "\u0950"  // ॐ
    },

    "Dependent_vowel": { // +()
        // Dependent vowel signs
        "a"     :   "",       // ADDED
        "A"     :   "\u0A3E", // $ਾ GURMUKHI VOWEL SIGN AA = kanna
        "aa"    :   "\u0A3E", // $ਾ GURMUKHI VOWEL SIGN AA = kanna
        "i"     :   "\u0A3F", // $ਿ GURMUKHI VOWEL SIGN I = sihari • stands to the left of the consonant
        "I"     :   "\u0A40", // $ੀ GURMUKHI VOWEL SIGN II = bihari
        "ii"    :   "\u0A40", // $ੀ GURMUKHI VOWEL SIGN II = bihari
        "u"     :   "\u0A41", // $ੁ GURMUKHI VOWEL SIGN U = aunkar
        "U"     :   "\u0A42", // $ੂ GURMUKHI VOWEL SIGN UU = dulainkar
        "uu"    :   "\u0A42", // $ੂ GURMUKHI VOWEL SIGN UU = dulainkar
        //""    :   "\u0A43", // " <reserved>
        //""    :   "\u0A44", // " <reserved>
        //""    :   "\u0A45", // " <reserved>
        //""    :   "\u0A46", // " <reserved>
        "e"     :   "\u0A47", // $ੇ GURMUKHI VOWEL SIGN EE = lanvan
        "E"     :   "\u0A47", // $ੇ GURMUKHI VOWEL SIGN EE = lanvan
        "ee"    :   "\u0A47", // $ੇ GURMUKHI VOWEL SIGN EE = lanvan
        "ai"    :   "\u0A48", // $ੈ GURMUKHI VOWEL SIGN AI = dulanvan
        //""    :   "\u0A49", // " <reserved>
        //""    :   "\u0A4A", // " <reserved>
        "o"     :   "\u0A4B", // $ੋ GURMUKHI VOWEL SIGN OO = hora
        "O"     :   "\u0A4B", // $ੋ GURMUKHI VOWEL SIGN OO = hora
        "oo"    :   "\u0A4B", // $ੋ GURMUKHI VOWEL SIGN OO = hora
        "au"    :   "\u0A4C"  // $ ੌ GURMUKHI VOWEL SIGN AU = kanaura
    },

    "Consonants": { // ()+
        // Consonants
        "k"     :   "\u0A15", // ਕ GURMUKHI LETTER KA
        "kh"    :   "\u0A16", // ਖ GURMUKHI LETTER KHA
        "g"     :   "\u0A17", // ਗ GURMUKHI LETTER GA
        "gh"    :   "\u0A18", // ਘ GURMUKHI LETTER GHA
        "~N"    :   "\u0A19", // ਙ GURMUKHI LETTER NGA
        "N^"    :   "\u0A19", // ਙ GURMUKHI LETTER NGA
        "ch"    :   "\u0A1A", // ਚ GURMUKHI LETTER CA
        "Ch"    :   "\u0A1B", // ਛ GURMUKHI LETTER CHA
        "chh"   :   "\u0A1B", // ਛ GURMUKHI LETTER CHA
        "j"     :   "\u0A1C", // ਜ GURMUKHI LETTER JA
        "jh"    :   "\u0A1D", // ਝ GURMUKHI LETTER JHA
        "~n"    :   "\u0A1E", // ਞ GURMUKHI LETTER NYA
        "n^"    :   "\u0A1E", // ਞ GURMUKHI LETTER NYA
        "JN"    :   "\u0A1E", // ਞ GURMUKHI LETTER NYA
        "T"     :   "\u0A1F", // ਟ GURMUKHI LETTER TTA
        "Th"    :   "\u0A20", // ਠ GURMUKHI LETTER TTHA
        "D"     :   "\u0A21", // ਡ GURMUKHI LETTER DDA
        "Dh"    :   "\u0A22", // ਢ GURMUKHI LETTER DDHA
        "N"     :   "\u0A23", // ਣ GURMUKHI LETTER NNA
        "t"     :   "\u0A24", // ਤ GURMUKHI LETTER TA
        "th"    :   "\u0A25", // ਥ GURMUKHI LETTER THA
        "d"     :   "\u0A26", // ਦ GURMUKHI LETTER DA
        "dh"    :   "\u0A27", // ਧ GURMUKHI LETTER DHA
        "n"     :   "\u0A28", // ਨ GURMUKHI LETTER NA
        //""    :   "\u0A29", // " <reserved>
        "p"     :   "\u0A2A", // ਪ GURMUKHI LETTER PA
        "ph"    :   "\u0A2B", // ਫ GURMUKHI LETTER PHA
        "b"     :   "\u0A2C", // ਬ GURMUKHI LETTER BA
        "bh"    :   "\u0A2D", // ਭ GURMUKHI LETTER BHA
        "m"     :   "\u0A2E", // ਮ GURMUKHI LETTER MA
        "y"     :   "\u0A2F", // ਯ GURMUKHI LETTER YA
        "r"     :   "\u0A30", // ਰ GURMUKHI LETTER RA
        //""    :   "\u0A31 " <reserved>
        "l"     :   "\u0A32", // ਲ GURMUKHI LETTER LA
        "L"     :   "\u0A33", // ਲ਼ GURMUKHI LETTER LLA ≡ 0A32  ਲ   0A3C  $਼
        //""    :   "\u0A34", // " <reserved>
        "w"     :   "\u0A35", // ਵ GURMUKHI LETTER VA
        "v"     :   "\u0A35", // ਵ GURMUKHI LETTER VA
        "sh"    :   "\u0A36", // ਸ਼ GURMUKHI LETTER SHA ≡ 0A38  ਸ   0A3C  $਼
        "Sh"    :   "\u0A36", // ਸ਼ GURMUKHI LETTER SHA ≡ 0A38  ਸ   0A3C  $਼
        "shh"   :   "\u0A36", // ਸ਼ GURMUKHI LETTER SHA ≡ 0A38  ਸ   0A3C  $਼
        //""    :   "\u0A37", // " <reserved>
        "s"     :   "\u0A38", // ਸ GURMUKHI LETTER SA
        "h"     :   "\u0A39", // ਹ GURMUKHI LETTER HA

        // Manually Added
        "x"     :   "\u0A15"+"\u0A4D"+"\u0A36", // क्ष == "kSh"
        "GY"    :   "\u0A1C"+"\u0A4D"+"\u0A1E"  // == "j~n"

        // Additional consonants
        //""    :   "\u0A59", // ਖ਼ GURMUKHI LETTER KHHA ≡ 0A16  ਖ   0A3C  $਼
        //""    :   "\u0A5A", // ਗ਼ GURMUKHI LETTER GHHA ≡ 0A17  ਗ   0A3C  $਼
        //""    :   "\u0A5B", // ਜ਼ GURMUKHI LETTER ZA ≡ 0A1C  ਜ   0A3C  $਼
        //""    :   "\u0A5C", // ੜ GURMUKHI LETTER RRA
        //""    :   "\u0A5D", // " <reserved>
        //""    :   "\u0A5E", // ਫ਼ GURMUKHI LETTER FA ≡ 0A2B  ਫ   0A3C  $਼
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
        "\u0323":   "\u0A3C", // $਼ GURMUKHI SIGN NUKTA = pairin bindi • for extending the alphabet to new letters
        // Sign
        "\u030D":   "\u0A51"  // $ੑ GURMUKHI SIGN UDAAT (See: Page 6 of http://www.unicode.org/L2/L2005/05344-gurmukhi3.pdf)
    },

    "Others": { // ()
        // Various signs
        ".N"    :   "\u0A01", // $ਁ GURMUKHI SIGN ADAK BINDI
        ".m"    :   "\u0A02", // $ਂ GURMUKHI SIGN BINDI
        ".n"    :   "\u0A02", // $ਂ GURMUKHI SIGN BINDI
        "M"     :   "\u0A02", // $ਂ GURMUKHI SIGN BINDI
        "H"     :   "\u0A03", // $ਃ GURMUKHI SIGN VISARGA
        ".a"    :   "\u0A05", // ਅ GURMUKHI LETTER A = aira // ADDED
        ".h"    :   "\u0A4D", // $ GURMUKHI SIGN VIRAMA

        // Reserved For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0A64", // " <reserved> → 0964  ।   devanagari danda
        //""    :   "\u0A65", // " <reserved> → 0965  ॥   devanagari double danda

        // Digits
        "0"     :   "\u0A66", // ੦ GURMUKHI DIGIT ZERO
        "1"     :   "\u0A67", // ੧ GURMUKHI DIGIT ONE
        "2"     :   "\u0A68", // ੨ GURMUKHI DIGIT TWO
        "3"     :   "\u0A69", // ੩ GURMUKHI DIGIT THREE
        "4"     :   "\u0A6A", // ੪ GURMUKHI DIGIT FOUR
        "5"     :   "\u0A6B", // ੫ GURMUKHI DIGIT FIVE
        "6"     :   "\u0A6C", // ੬ GURMUKHI DIGIT SIX
        "7"     :   "\u0A6D", // ੭ GURMUKHI DIGIT SEVEN
        "8"     :   "\u0A6E", // ੮ GURMUKHI DIGIT EIGHT
        "9"     :   "\u0A6F", // ੯ GURMUKHI DIGIT NINE

        // Gurmukhi-specific additions
        //""    :   "\u0A70", // $ੰ GURMUKHI TIPPI • nasalization
        //""    :   "\u0A71", // $ੱ GURMUKHI ADDAK • doubles following consonant
        //""    :   "\u0A72", // ੲ GURMUKHI IRI • base for vowels
        //""    :   "\u0A73", // ੳ GURMUKHI URA • base for vowels
        //""    :   "\u0A74", // ੴ GURMUKHI EK ONKAR • God is One
        //""    :   "\u0A75", // $ੵ GURMUKHI SIGN YAKASH

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u0A4D"  // $ GURMUKHI SIGN VIRAMA
};