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

const grid = new cheetahGrid.ListGrid({
    parentElement: document.querySelector('#sample2'),
    header: [
        { field: 'number', caption: 'number', columnType: 'number',
            style: {color: 'red'}},
        { field: 'check', caption: 'check', columnType: 'check',
            style: {
                uncheckBgColor: '#FDD',
                checkBgColor: 'rgb(255, 73, 72)'
            }
        }
    ],
})

// チェックボックスのカラム用の設定
type CheckStyle = {
    uncheckBgColor: string;
    checkBgColor: string;
}

type CheckColumn = {
    columnType: 'check';
    caption: string;
    field: string;
    style: CheckStyle;
}

// 数値用のカラム用の設定
type NumberStyle = {
    color: string;
}

type NumberColumn = {
    columnType: 'number';
    caption: string;
    field: string;
    style: NumberStyle;
}

// 両方の型を取り得る合併型を定義
type Column = CheckColumn | NumberColumn;

// 無事、エラーを出さずに過不足なく型付けできた
const header: Column[] = [
{ field: 'number', caption: 'number', columnType: 'number',
  style: {color: 'red'}},
{ field: 'check', caption: 'check', columnType: 'check',
  style: {
    uncheckBgColor: '#FDD',
    checkBgColor: 'rgb(255, 73, 72)'
  }
}
];

// 短い型定義
type Style = {
    color?: string;
    uncheckBgColor?: string;
    checkBgColor?: string;
}

type Column = {
    columnType: 'number' | 'check';
    caption: string;
    field: string;
    style: string;
}

// 型ガード
// TypeScriptでは、今まで見て来た通り、少し柔軟な型を許容
// 数値型 or null
// 数字型 or 文字列
// オブジェクトの特定の属性 columnType -> 'check' という文字列の場合のみ属性が増える

// userNameOrId は文字列か数値
let userNameOrId: string | number = getUser();

if (typeof userNameOrId === "string")
{
    // このif文の中では、userNameOrIdは文字列型として扱われる
    this.setState({
        userName: userNameOrId.toUpperCase()
    });
}
else
{
    // このelse文の中では、userNameOrIdは数値型として扱われる
    const user = this.repository.findUserByID(userNameOrId);
    this.setState({
        userName: user.getName()
    });
}

type Column = CheckColumn | NumberColumn;

function getValue(column: Column): string {
    if (column.field === 'number') {
        // ここではcolumnは「NumberColumn」型
    } else {
        // ここではcolumnは「CheckColumn」型
    }
}

// ユーザー定義の型ガード
function isArray(arg: any): arg is Array {
    return Array.isArray(arg);
}

// 型アサーション(表明)
// 表明: プログラムのその箇所で必ず真であるべき式の形式をとる。多くの言語ではそのような前提条件のチェックに表明を使用する。

const page: any = { name: "profile page" };
// any型はasを使用してどんな型にでも変換できる
const pageName: string = page as string;

type Park = {
    name: string;
    hasTako: boolean;
};

// Park のキーである"name" | "hasTako"が割り当てられる
type Key = keyof Park;
// 指定されたキー以外はエラーになる
const key: Key = "name";
// 1 行でも書ける
const key: keyof Park = "hasTako";
// 値の方の型も取れる (string になる)
type ParkName = Park["name"];
// 指定されたキー以外はエラーになる
const key: keyof Park = "name";

// 読み込み専用の型定義
type ParkForm = {
    name: string;
    hasTako: boolean;
};
// 値を全て読み込み専用にした型
type FrozenParkForm = { readonly [K in keyof ParkForm]: ParkForm[K] };
const form: FrozenParkForm = {
    name: "恵比寿東",
    hasTako: true
};
// 読み込み専用なのでエラーになる
form.name = "和布刈公園"

// インターフェースを使った型定義
interface Pepole {
    name: string;
    favoriteBank: string;
    favoriteGyudon?: string;
}

// 2つのインタフェースの継承
interface PartyPeople extends Twitter, Instagram {
}

const shibukawachan: PartyPeople = {
    twitterId: "@shibu_jp",
    instagramId: "shibukawachan"
}
