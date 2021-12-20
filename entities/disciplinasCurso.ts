import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from "typeorm";
import Curso from "./curso";
import Disciplina from "./disciplina";

@Unique(["disciplinaIdDisciplina", "cursoIdCurso"])
@Entity({ name: "disciplinasCurso" })
export default class DisciplinasCurso extends BaseEntity {
    
    @PrimaryColumn()
    public disciplinaIdDisciplina: number;

    @PrimaryColumn()
    public cursoIdCurso: number;

    @ManyToOne(() => Disciplina, disciplina => disciplina.idDisciplina, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "disciplinaIdDisciplina" })
    public disciplina: Disciplina;

    @ManyToOne(() => Curso, curso => curso.idCurso, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "cursoIdCurso" })
    public curso: Curso;
}