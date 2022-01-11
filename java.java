class TestaCondicional {
    public static void main(String[] args) {
        System.out.println("Ola peopel");

        int valor = 3;

        if (valor > 1 && valor < 5) {
            if (valor == 3) {
                System.out.println("ibag 3. Happy birds");
            } else if (valor == 4) return;
            System.out.println("vc tem entre 1 e 5");
        } else System.out.println("voce é maior");


    }
}