import { Injectable } from "@angular/core";

@Injectable()
export class ChecaCampo {
    imagens: string[] = [
        'assets/checked_not_bak.png',
        'assets/checked_ok_bak.png',
        'assets/asterisco.png'
    ];
    checa(imagem: boolean): string{
        if (imagem){
            return this.imagens[1];
        }
        return this.imagens[0];
    }
    inicio(): string{
        return this.imagens[2];
    }
}