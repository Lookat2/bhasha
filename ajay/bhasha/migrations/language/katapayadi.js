exports.katapayadi = [
    // https://en.wikipedia.org/wiki/Katapayadi_system
    // mapping characters according to the index of array, 11 is VIRAMA (added)
    ["\u091E", "\u0928", "",       "",
     "\u0C1E", "\u0C28", "",       "",
     "\u0C9E", "\u0CA8", "",       "",
     "\u0A9E", "\u0AA8", "",       "",
     "\u0B9E", "\u0BA8", "",       "",
     "\u099E", "\u09A8", "",       "",
     "\u0A1E", "\u0A28", "",       "",
     "\u0D1E", "\u0D28", "",       "",
     "\u0B1E", "\u0B28", "",       ""      ], // 'ञ', 'न' , '', '' => 0 

    ["\u0915", "\u091F", "\u092A", "\u092F",
     "\u0C15", "\u0C1F", "\u0C2A", "\u0C2F",
     "\u0C95", "\u0C9F", "\u0CAA", "\u0CAF",
     "\u0A95", "\u0A9F", "\u0AAA", "\u0AAF",
     "\u0B95", "\u0B9F", "\u0BAA", "\u0BAF",
     "\u0995", "\u099F", "\u09AA", "\u09AF",
     "\u0A15", "\u0A1F", "\u0A2A", "\u0A2F",
     "\u0D15", "\u0D1F", "\u0D2A", "\u0D2F",
     "\u0B15", "\u0B1F", "\u0B2A", "\u0B2F"], // 'क', 'ट', 'प', 'य' => 1

    ["\u0916", "\u0920", "\u092B", "\u0930",
     "\u0C16", "\u0C20", "\u0C2B", "\u0C30",
     "\u0C96", "\u0CA0", "\u0CAB", "\u0CB0",
     "\u0A96", "\u0AA0", "\u0AAB", "\u0AB0",
     "\u0B95", "\u0B9F", "\u0BAA", "\u0BB0",
     "\u0996", "\u09A0", "\u09AB", "\u09B0",
     "\u0A16", "\u0A20", "\u0A2B", "\u0A30",
     "\u0D16", "\u0D20", "\u0D2B", "\u0D30",
     "\u0B16", "\u0B20", "\u0B2B", "\u0B30"], // 'ख', 'ठ', 'फ', 'र' => 2

    ["\u0917", "\u0921", "\u092C", "\u0932",
     "\u0C17", "\u0C21", "\u0C2C", "\u0C32",
     "\u0C97", "\u0CA1", "\u0CAC", "\u0CB2",
     "\u0A97", "\u0AA1", "\u0AAC", "\u0AB2",
     "\u0B95", "\u0B9F", "\u0BAA", "\u0BB2",
     "\u0997", "\u09A1", "\u09AC", "\u09B2",
     "\u0A17", "\u0A21", "\u0A2C", "\u0A32",
     "\u0D17", "\u0D21", "\u0D2C", "\u0D32",
     "\u0B17", "\u0B21", "\u0B2C", "\u0B32"], // 'ग', 'ड', 'ब', 'ल' => 3

    ["\u0918", "\u0922", "\u092D", "\u0935",
     "\u0C18", "\u0C22", "\u0C2D", "\u0C35",
     "\u0C98", "\u0CA2", "\u0CAD", "\u0CB5",
     "\u0A98", "\u0AA2", "\u0AAD", "\u0AB5",
     "\u0B95", "\u0B9F", "\u0BAA", "\u0BB5",
     "\u0998", "\u09A2", "\u09AD", "\u09AC",
     "\u0A18", "\u0A22", "\u0A2D", "\u0A35",
     "\u0D18", "\u0D22", "\u0D2D", "\u0D35",
     "\u0B18", "\u0B22", "\u0B2D", "\u0B35"], // 'घ', 'ढ', 'भ', 'व' => 4

    ["\u0919", "\u0923", "\u092E", "\u0936",
     "\u0C19", "\u0C23", "\u0C2E", "\u0C36",
     "\u0C99", "\u0CA3", "\u0CAE", "\u0CB6",
     "\u0A99", "\u0AA3", "\u0AAE", "\u0AB6",
     "\u0B99", "\u0BA3", "\u0BAE", "\u0BB6",
     "\u0999", "\u09A3", "\u09AE", "\u09B6",
     "\u0A19", "\u0A23", "\u0A2E", "\u0A36",
     "\u0D19", "\u0D23", "\u0D2E", "\u0D36",
     "\u0B19", "\u0B23", "\u0B2E", "\u0B36"], // 'ङ', 'ण', 'म', 'श' => 5

    ["\u091A", "\u0924", "",       "\u0937",
     "\u0C1A", "\u0C24", "",       "\u0C37",
     "\u0C9A", "\u0CA4", "",       "\u0CB7",
     "\u0A9A", "\u0AA4", "",       "\u0AB7",
     "\u0B9A", "\u0BA4", "",       "\u0BB7",
     "\u099A", "\u09A4", "",       "\u09B7",
     "\u0A1A", "\u0A24", "",       "\u0A36",
     "\u0D1A", "\u0D24", "",       "\u0D37",
     "\u0B1A", "\u0B24", "",       "\u0B37"], // 'च', 'त', '', 'ष' => 6

    ["\u091B", "\u0925", "",       "\u0938",
     "\u0C1B", "\u0C25", "",       "\u0C38",
     "\u0C9B", "\u0CA5", "",       "\u0CB8",
     "\u0A9B", "\u0AA5", "",       "\u0AB8",
     "\u0B9A", "\u0BA4", "",       "\u0BB8",
     "\u099B", "\u09A5", "",       "\u09B8",
     "\u0A1B", "\u0A25", "",       "\u0A38",
     "\u0D1B", "\u0D25", "",       "\u0D38",
     "\u0B1B", "\u0B25", "",       "\u0B38"], // 'छ', 'थ', '', 'स' => 7

    ["\u091C", "\u0926", "",       "\u0939",
     "\u0C1C", "\u0C26", "",       "\u0C39",
     "\u0C9C", "\u0CA6", "",       "\u0CB9",
     "\u0A9C", "\u0AA6", "",       "\u0AB9",
     "\u0B9C", "\u0BA4", "",       "\u0BB9",
     "\u099C", "\u09A6", "",       "\u09B9",
     "\u0A1C", "\u0A26", "",       "\u0A39",
     "\u0D1C", "\u0D26", "",       "\u0D39",
     "\u0B1C", "\u0B26", "",       "\u0B39"], // 'ज', 'द', '', 'ह' => 8

    ["\u091D", "\u0927", "",       "",
     "\u0C1D", "\u0C27", "",       "",
     "\u0C9D", "\u0CA7", "",       "",
     "\u0A9D", "\u0AA7", "",       "",
     "\u0B9C", "\u0BA4", "",       "",
     "\u099D", "\u09A7", "",       "",
     "\u0A1D", "\u0A27", "",       "",
     "\u0D1D", "\u0D27", "",       "",
     "\u0B1D", "\u0B27", "",       ""      ], // 'झ', 'ध', '', '' => 9

    ["\u094D",
     "\u0c4D",
     "\u0ccD",
     "\u0acD",
     "\u0bcD",
     "\u09cD",
     "\u0a4D",
     "\u0D4D",
     "\u0b4D"] // VIRAMA
];