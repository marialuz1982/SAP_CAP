using {BibliotecaCAP as my} from '../db/schema';

service ZOS_ACADEMIA_BIBLIOTECA_CAP_SRV {
    
    entity SocioSet as projection on my.Socio;
    entity LibroSet as projection on my.Libro;
}
