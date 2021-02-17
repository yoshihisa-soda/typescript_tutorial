// オブジェクト指向

// 基本のクラス宣言
// TypeScript ではプロパティの定義をクラス宣言の中で行う必要がある

class SmallAnimal {
    // プロパティは名前: 型
    animaltype: string;

    // コンストラクター
    constructor() {
        this.animaltype = "ポメラニアン";
    }

    say() {
        console.log(`${this.animaltype} だけどど MSの中に永らく居たBOM信者の全身の毛をむしりたい`);
    }
}

const smallAnimal2 = new SmallAnimal();
smallAnimal2.say();

// アクセス制御(public/protected/private)

class SmallDog {

    // 小型犬は宝物を秘密の場所に埋める
    private secretPlace: string;
    dig(): string {
        return this.secretPlace;
    }

    // 埋める
    bury(treasure: string) {
        this.secretPlace = treasure;
    }
}

const miniatureDachshund = new SmallDog();
// 埋めた
miniatureDachshund.bury("骨");
// 掘り出した
console.log(miniatureDachshund.dig());

// protected は継承して使うことを前提としたスコープ
// ただし、Typescriptでは使わないかも


// プロパティ定義をコンストラクタ変数に
class BigAnimal {
    constructor(private secretplace2: string) {
    }

    dig(): string {
        return this.secretplace2;
    }

    // これはダメらしい
    bury(treasure: string) {
        this.secretPlace2 = treasure;
    }
}

