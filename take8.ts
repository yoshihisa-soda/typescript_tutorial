// オブジェクト指向

import { isMethodDeclaration } from "typescript";

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

// static メンバー
class StaticSample {
    // 静的なプロパティ
    static staticVariable: number;
    // 通常のプロパティ
    variable: number = 3;

    // 静的なメソッド
    static classMethod() {
        console.log(this.staticVariable);
        console.log(StaticSample.staticVariable);
    // 通常のプロパティは参照不可
    // console.log(variable);
    }

    method() {
        // 通常のメソッドから通常のプロパティは ``this.`` で参照可能
        console.log(this.variable);
        // 通常のメソッドから静的なプロパティは ``クラス名.`` で参照可能
        console.log(StaticSample.staticVariable);
        // 通常のメソッドから静的なプロパティを ``this.`` では参照不可
        // console.log(this.staticVariable);
    }
}

class Point {
    // 通常のコンストラクタ
    constructor(public x: number, public y: number) {}

    // 極座標のファクトリーメソッド
    static polar(length: number, angle: number): Point {
        return new Point(
            length * Math.cos(angle),
            length * Math.sin(angle)
        );
    }
}

console.log(new Point(10, 20));
console.log(Point.polar(10, Math.PI * 0.25));

// 静的なプロパティを使いすぎると、複製できないクラスになってしまい、テストなどがしにくくなる

// 新: インスタンスクラスフィールドを使う場合
class FoolAnimal {
    fav = "小田原";
    say = () => {
        console.log(`私は ${this.fav} が好きです`);
    }


// 読み込み専用の変数（readonly）
class SimLockPhone {
    readonly carrier: string;
    constructor(carrier) {
        this.carrier = carrier;
    }
}

const myPhone = new SimLockPhone("Docomo");
// myPhone.carrier = "au";


class HappySet {
    eat() {
        console.log("マック食べよう");
    }
}

class PoisonSet extends HappySet {
    eat() {
        console.log("シュークリームを食べに行きました");
    }
}

// インタフェースには実装がないため、推測ができず、常に any （なにかを返す）という型になってしまう
// void型を含め、手動で型をつける必要がある
interface Animal {
    eat(): void;
}

class Dog implements Animal {
    eat() {
        console.log("中本を食べに行きました");
    }
}

// デコレーター
// 決まった引数とレスポンスを持つ関数を作り、@の記号をつけて、
// クラスなどの前に付与すると、宣言が完了したオブジェクトなどが引数に入ってこの関数が呼ばれる

function StrongZero(target) {
    target.prototype.drink = function() {
        console.log("ストロングゼロを飲んだ");
    };
    return target;
}

@StrongZero
class HumanBaby {
    hit() {
        console.log("あああああああああ");
    }
}

const sa = new HumanBaby();
sa.hit();



