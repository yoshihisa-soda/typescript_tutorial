// 型はUnion Typeで複数列挙できる
let birthDay: number | string;

// 型には文字列や数値の値も設定できる
let favoriteFood: "北極" | "冷やし味噌";

// any型は変数のチェックを放棄する
function somFunction(opts: any) {
    console.log(opts.debug); //  debug があるかどうかチェックしないのでエラーにならない
}

// "type 名前 = " 構文
type BirthYear = number | string;

// 型には値も設定できる
type FoodMenu = "北極" | "冷やし味噌";

// 変数や関数の引数で使える
const birthday: BirthYear = "平成";

function orderFood(food: FoodMenu) {   
}

type Person = {
    name: string;
    favoriteBank: string;
    favoriteGyudon: string;
}

// 変数定義時にインターフェースを指定
const person: Person = {
    name: "Yoichi",
    favoriteBank: "Mizuho",
    favoriteGyudon: "Matsuya"
};

// オブジェクトの属性の修飾: オプション、読み込み専用
type Person2 = {
    name: string;
    readonly favoriteBank: string;
    favoriteGyudon?: string;
}

// Partial をつけたので、全ての要素を設定しなくてもよい
const zoo: Partial<Person> = { name: "zoo"}

// string -> "000-0000", number -> "0000000"で表現できる
const postalCodes: { [key: string]: string} = {
    "602-0000": "京都市上京区",
    "602-0827": "京都市上京区相生町",
    "602-0828": "京都市上京区愛染寺町",
    "602-0054": "京都市上京区飛鳥井町",
}

// 型の合成
type Twitter = {
    twitterId: string;
}

type Instagram = {
    instagramId: string;
}

const shibukawa: Twitter & Instagram = {
    twitterId: "@chomechome",
    instagramId: "chomechome"
}
