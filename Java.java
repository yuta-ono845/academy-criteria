import java.util.ArrayList;
import java.util.List;

public class Java {
    private int number = 100;

    public int getNumber() {
        return this.number;
    }
    public void setNumber(int number) {
        this.number = number;
    }

    //評価シート、バックエンド、No10のコード
    Java(){
        System.out.println("クラスを設計図とするなら、コンストラクタは規格値");
    }

    public static void main(String[] args) {
        
        //評価シート、バックエンド、No３のコード
        if(new Java().number == 100) {
            System.out.println("100");
        }

        //評価シート、バックエンド、No4のコード
        for(int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        //評価シート、バックエンド、No5のコード
        List<String> animals = new ArrayList<>();

        animals.add("dog");
        animals.add("cat");
        animals.remove(0);
        System.out.println(animals);
    }

    //評価シート、バックエンド、No6のコード
    public static void hello() {
        System.out.println("hello");
    }
}

// No11 カプセル化のサンプル: フィールドを private にし、ゲッター/セッターで整合性を守る例
class EncapsulatedProfile {
    private String name;
    private int age;

    EncapsulatedProfile(String name, int age) {
        setName(name); // バリデーションを通した上で代入
        setAge(age);
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("name is required");
        }
        this.name = name;
    }

    public void setAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("age must be >= 0");
        }
        this.age = age;
    }

    public void celebrateBirthday() {
        this.age++;
    }
}

// カプセル化デモの呼び出し例（実行は任意）
class EncapsulationDemo {
    static void run() {
        EncapsulatedProfile profile = new EncapsulatedProfile("ono", 24);
        profile.celebrateBirthday();
        System.out.println(profile.getName() + " -> age " + profile.getAge());
    }
}

// No13 継承のサンプル: 親クラスのプロパティ/メソッドを子クラスで引き継ぎ、必要に応じて拡張・上書きする例

class Animal {
    protected String name;

    Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " makes a sound");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name); // 親コンストラクタを呼び出し、name を初期化
    }

    // 親の動作を拡張/上書き（オーバーライド）
    @Override
    public void speak() {
        System.out.println(name + " ワンワン");
    }

    public void fetch() {
        System.out.println(name + " ボールをとってくる");
    }
}

// 継承デモの呼び出し例（実行は任意）
class InheritanceDemo {
    static void run() {
        Animal generic = new Animal("animal");
        generic.speak(); // 親クラスのメソッド

        Dog pochi = new Dog("pochi");
        pochi.speak(); // 子クラスでオーバーライドしたメソッド
        pochi.fetch(); // 子クラス固有のメソッド
    }
}


