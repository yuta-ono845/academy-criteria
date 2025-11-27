let name = "sample.name";
console.log(name);
const age = 24;
if(age === 24){
    console.log("t");
};
switch (100){
    case 10:
        console.log(10);
        break;
    case 100:
        console.log(100);
        break;
    default:
        console.log(error);
        break;
};

let year = 2020;
while (year < 2024){
    year++;
    console.log(year);
};

for(let i=1; i<=5; i++){
    console.log(i);
};

let fluits=["apple", "banana"]
console.log(fluits);
console.log(fluits[1]);
fluits[0]="りんご";
console.log(fluits[0]);

const profile = {
    myname:"ono",
    age:24,
    greet:function(){
        console.log(this.myname+"です");
    }
}
profile.greet();

function weekly(day) {
    switch(day){
        case 0:
            return "月曜日";
        case null:
            return "null";
        default :
            return "error"
    }
}
console.log(weekly(0));
console.log(weekly(null));
console.log(weekly("1"));

let sum=(int1,int2)=>{
    return int1 + int2;
}
console.log(sum(5,10));

class animals {
    constructor(animal1, animal2) {
        this.animal1 = animal1;
        this.animal2 = animal2;
    }

    animal (){
        console.log(this.animal2, this.animal1);
    }
}
const animals1 = new animals("cat", "dog");
console.log(animals1);

export const sum2 = (a, b) => a + b;

export default animals1;

const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(num => num > 3);
console.log("findの結果:", foundNumber);

const doubled = numbers.map(num => num * 2);
console.log("mapの結果:", doubled);

const even = numbers.filter(num => num % 2 === 0);
console.log("filterの結果:", even);

// No34  debugger
function inspectProfile(profile) {
    console.log("inspectProfile start", profile);
    debugger; 
    const nameUpper = profile?.myname?.toUpperCase?.(); // ?は左がundefinedやnullのときにエラーを出さずにundefinedを返す 
                                                        // toUpperCase()は文字列を大文字に変換するメソッド
    const age = profile?.age ?? "unknown";// ??は左がundefinedやnullのときに右を返す
    console.log("inspectProfile resume", { nameUpper, age });
}
inspectProfile(profile); // profileはファイル上部で定義済みのオブジェクト

// No39,40 Vanilla JSでのfetch API利用例（vanills.jsとは外部通信ライブラリを使わない純粋なJavaScriptの意）
async function sendSampleData(data) {
    console.log("sendSampleData: POST payload", data);
    try {
        const response = await fetch("https://example.com/api/sample", { // リクエスト送り、レスポンスを待つ
            method: "POST", // post=データ送信
            headers: { "Content-Type": "application/json" }, // JSON形式で送信することを指定
            body: JSON.stringify(data), // dataオブジェクトをJSON文字列に変換
        });
        const text = await response.text();// 返信内容をテキストとして取得、読み取り完了まで待つ
        console.log("sendSampleData: status", response.status, "body", text);// レスポンスのステータスコードと本文を表示
    } catch (error) {
        console.error("sendSampleData: fetch error (オフラインでもここを通る)", error);
    }
}
// 実際に送信する場合はコメントアウトを外す（ネットワーク到達性がある環境で使用する）
// sendSampleData({ userId: 1, comment: "評価用のサンプルデータ" });


// No40 非同期処理async/await のデモ用関数
function simulateRequest(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ok: true, received: data });
        }, 300);
    });
}

// async/await で Promise を直列処理するデモ
async function runAsyncDemo() {
    try {
        console.log("runAsyncDemo start");
        const first = await simulateRequest({ step: 1 });
        console.log("first response", first);
        const second = await simulateRequest({ step: 2, prev: first.received });
        console.log("second response", second);
    } catch (error) {
        console.error("runAsyncDemo error", error);
    } finally {
        console.log("runAsyncDemo finished (イベントループで順次実行)");
    }
}
runAsyncDemo();
