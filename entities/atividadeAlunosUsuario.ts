import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from "typeorm";
import Atividade from "./atividade";
import Usuario from "./usuario";

@Unique(["atividadeIdAtividade", "usuarioIdUsuario"])
@Entity({ name: "atividadeAlunosUsuario" })
export default class AtividadeUsuario extends BaseEntity {

    @PrimaryColumn()
    public atividadeIdAtividade: number;

    @PrimaryColumn()
    public usuarioIdUsuario: number;

    @ManyToOne((type) => Atividade, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: "atividadeIdAtividade", referencedColumnName: "idAtividade" })
    public atividade: Atividade;

    @ManyToOne((type) => Usuario, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: "usuarioIdUsuario", referencedColumnName: "idUsuario" })
    public usuario: Usuario;
}