import { QuartzComponent, QuartzComponentConstructor } from "./types"

interface Options {}
const defaultOptions: Options = {}

export default ((opts?: Partial<Options>) => {
  const options: Options = { ...defaultOptions, ...opts }

  const ProfileCard: QuartzComponent = () => {
    return (
      <div class="skills-card">
        <div class="profile-header">
          <img src="./static/icon.png" class="profile-avatar-small" />

          <div class="profile-text">
            <strong class="profile-name">Mahesh Puri</strong>
            <span class="profile-role">Principal Software Engineer</span>
          </div>
        </div>

        <hr />

        {/* <h4>🛠 Skills</h4> */}

        <div class="skill-group">
          <strong>Backend & Data</strong>
          <p class="skill-line">
            Java 17+ | Spring Boot Microservices | SCDF | Spring Framework (Core, MVC, Data JPA,
            AOP) | Apache Kafka | Python | MySQL | PostgreSQL | MongoDB | Docker | Kubernetes |
            Linux | Ansible | Jenkins | Maven
          </p>
        </div>

        <div class="skill-group">
          <strong>Frontend</strong>
          <p class="skill-line">
            Angular | JavaScript | HTML5 | CSS3 | Bootstrap | JavaFX (Deskto App)
          </p>
        </div>

        {/* <div class="skill-group">
          <strong>DevOps & Cloud</strong>
          <p class="skill-line">Docker | Kubernetes | Linux | Ansible | Jenkins | Maven</p>
        </div> */}

        {/* <div class="skill-group">
          <strong>Databases</strong>
          <p class="skill-line">MySQL | PostgreSQL | Redis | MongoDB</p>
        </div> */}

        {/* <div class="skill-group">
          <strong>Tools & Platforms</strong>
          <p class="skill-line">
            GitHub | Bitbucket | SVN | Postman | Swagger | IntelliJ | Eclipse | STS | VS Code |
            Databricks Notebooks
          </p>
        </div> */}
      </div>
    )
  }

  return ProfileCard
}) satisfies QuartzComponentConstructor
