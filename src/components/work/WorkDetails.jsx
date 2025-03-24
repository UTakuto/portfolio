import { useParams, useNavigate } from "react-router-dom";
import { productionInfo } from "../../data/productions";
import "./WorkDetails.css";

export default function WorkDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = productionInfo.find((p) => p.id === Number(id));

    if (!project) {
        return navigate("/work");
    }

    return (
        <div className="workDetails">
            <div className="workContent">
                <div className="workImage">
                    <img src={project.img} alt={project.title} />
                    {project.awards && project.awards.length > 0 && (
                        <div className="awards">
                            <h3>受賞歴</h3>
                            <ul>
                                {project.awards.map((award, index) => (
                                    <li key={index}>
                                        <span className="award-date">{award.date}</span>
                                        <span className="award-name">{award.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="workInfo">
                    <h2>{project.title}</h2>
                    <p className="date">{project.date}</p>
                    <p className="grade">{project.grade}</p>
                    <div className="description">
                        <h3>プロジェクト概要</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="role">
                        <h3>役割</h3>
                        {project.role.map((role, index) => (
                            <p key={index}>{role}</p>
                        ))}
                    </div>
                    <div className="technologies">
                        <h3>使用技術</h3>
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="linkContainer">
                        {project.url && (
                            <div className="link">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    サイトを見る
                                </a>
                            </div>
                        )}
                        {project.github && (
                            <div className="link">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHubへ
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="workReflection">
                <h2>力を入れた点</h2>
                <div className="reflection-points">
                    {project.reflection?.strongPoints.map((point, index) => (
                        <div key={index} className="reflection-point">
                            <p>{point.text}</p>
                            {point.img && (
                                <div className="reflection-image">
                                    <img src={point.img} alt={`詳細画像 ${index + 1}`} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <h2>今後の課題</h2>
                <ul>
                    {project.reflection?.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                    ))}
                </ul>

                <h2>気づき・学び・反省点</h2>
                <ul>
                    {project.reflection?.learnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                    ))}
                </ul>
            </div>

            <div className="backButton">
                <a href="/work">戻る</a>
            </div>
        </div>
    );
}
