<template>
  <div
    id="skills"
    class="skills-container"
  >
    <h1>Skills</h1>
    <h2>Languages</h2>
    <ul>
      <li
        v-for="language in languages"
        :key="language.name"
      >
        <div class="skill-item">
          <component
            :is="language.icon"
            class="icon"
          />
          <span class="label">{{ language.name }}</span>
        </div>
        <div class="meter">
          <span :style="{ width: language.meter }" />
        </div>
      </li>
    </ul>
    <h2>Frameworks</h2>
    <ul>
      <li
        v-for="framework in frameworks"
        :key="framework.name"
      >
        <div class="skill-item">
          <component
            :is="framework.icon"
            class="icon"
          />
          <span class="label">{{ framework.name }}</span>
        </div>
        <div class="meter">
          <span :style="{ width: framework.meter }" />
        </div>
      </li>
    </ul>
    <h2>Tools</h2>
    <ul>
      <li
        v-for="tool in tools"
        :key="tool.name"
      >
        <div class="skill-item">
          <component
            :is="tool.icon"
            class="icon"
          />
          <span class="label">{{ tool.name }}</span>
        </div>
        <div class="meter">
          <span :style="{ width: tool.meter }" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import JSIcon from 'simple-icons/icons/javascript.svg';
import PHPIcon from 'simple-icons/icons/php.svg';
import ReactIcon from 'simple-icons/icons/react.svg';
import ReduxIcon from 'simple-icons/icons/redux.svg';
import VueIcon from 'simple-icons/icons/vuedotjs.svg';
import GraphQLIcon from 'simple-icons/icons/graphql.svg';
import JestIcon from 'simple-icons/icons/jest.svg';
import NodeIcon from 'simple-icons/icons/nodedotjs.svg';
import GoIcon from 'simple-icons/icons/go.svg';
import AWSIcon from 'simple-icons/icons/amazonaws.svg';
import ServerlessIcon from 'simple-icons/icons/serverless.svg';
import WebpackIcon from 'simple-icons/icons/webpack.svg';
import MaterialUIIcon from 'simple-icons/icons/mui.svg';
import SASSIcon from 'simple-icons/icons/sass.svg';
import CSS3Icon from 'simple-icons/icons/css3.svg';
import IonicIcon from 'simple-icons/icons/ionic.svg';
import AngularIcon from 'simple-icons/icons/angular.svg';
import CordovaIcon from 'simple-icons/icons/apachecordova.svg';
import TypescriptIcon from 'simple-icons/icons/typescript.svg';
import JavaIcon from 'simple-icons/icons/openjdk.svg';
import ApacheIcon from 'simple-icons/icons/apache.svg';
import NginxIcon from 'simple-icons/icons/nginx.svg';
import GulpIcon from 'simple-icons/icons/gulp.svg';
import MagentoIcon from 'simple-icons/icons/magento.svg';
import LaravelIcon from 'simple-icons/icons/laravel.svg';
import PythonIcon from 'simple-icons/icons/python.svg';
import CSharpIcon from 'simple-icons/icons/csharp.svg';
import HTML5Icon from 'simple-icons/icons/html5.svg';
import MySQLIcon from 'simple-icons/icons/mysql.svg';
import JQueryIcon from 'simple-icons/icons/jquery.svg';
import RollupIcon from 'simple-icons/icons/rollupdotjs.svg';
import PostgresIcon from 'simple-icons/icons/postgresql.svg';
import JenkinsIcon from 'simple-icons/icons/jenkins.svg';
import DjangoIcon from 'simple-icons/icons/django.svg';
import SpringIcon from 'simple-icons/icons/spring.svg';
import Auth0Icon from 'simple-icons/icons/auth0.svg';
import JasmineIcon from 'simple-icons/icons/jasmine.svg';
import GitIcon from 'simple-icons/icons/git.svg';
import KotlinIcon from 'simple-icons/icons/kotlin.svg';
import FlaskIcon from 'simple-icons/icons/flask.svg';
import PytestIcon from 'simple-icons/icons/pytest.svg';
import CypressIcon from 'simple-icons/icons/cypress.svg';
import BuildkiteIcon from 'simple-icons/icons/buildkite.svg';
import HelmIcon from 'simple-icons/icons/helm.svg';
import MicrosoftSQLServerIcon from 'simple-icons/icons/microsoftsqlserver.svg';
import SnowflakeIcon from 'simple-icons/icons/snowflake.svg';
import TerraformIcon from 'simple-icons/icons/terraform.svg';
import DatadogIcon from 'simple-icons/icons/datadog.svg';

export default {
  name: 'SkillsSection',
  components: {
    TypescriptIcon,
    JSIcon,
    PHPIcon,
    GraphQLIcon,
    SASSIcon,
    CSS3Icon,
    HTML5Icon,
    MySQLIcon,
    JavaIcon,
    PythonIcon,
    GoIcon,
    CSharpIcon,
    NodeIcon,
    AngularIcon,
    ReactIcon,
    VueIcon,
    JQueryIcon,
    IonicIcon,
    MagentoIcon,
    LaravelIcon,
    JestIcon,
    AWSIcon,
    ServerlessIcon,
    WebpackIcon,
    MaterialUIIcon,
    CordovaIcon,
    ApacheIcon,
    NginxIcon,
    GulpIcon,
    RollupIcon,
    ReduxIcon,
    PostgresIcon,
    JenkinsIcon,
    DjangoIcon,
    SpringIcon,
    Auth0Icon,
    JasmineIcon,
    GitIcon,
    KotlinIcon,
    FlaskIcon,
    PytestIcon,
    CypressIcon,
    BuildkiteIcon,
    HelmIcon,
    MicrosoftSQLServerIcon,
    SnowflakeIcon,
    TerraformIcon,
    DatadogIcon,
  },
  data() {
    return {
      languages: [
        { name: 'Javascript', icon: 'JSIcon', meter: '85%' },
        { name: 'Typescript', icon: 'TypescriptIcon', meter: '85%' },
        { name: 'Kotlin', icon: 'KotlinIcon', meter: '80%' },
        { name: 'Java', icon: 'JavaIcon', meter: '80%' },
        { name: 'Python', icon: 'PythonIcon', meter: '70%' },
        { name: 'PHP', icon: 'PHPIcon', meter: '60%' },
        { name: 'HTML5', icon: 'HTML5Icon', meter: '80%' },
        { name: 'CSS3', icon: 'CSS3Icon', meter: '80%' },
        { name: 'SCSS', icon: 'SASSIcon', meter: '70%' },
        { name: 'Go', icon: 'GoIcon', meter: '50%' },
        { name: 'C#', icon: 'CSharpIcon', meter: '55%' },
        { name: 'GraphQL', icon: 'GraphQLIcon', meter: '80%' },
        { name: 'PostgreSQL', icon: 'PostgresIcon', meter: '80%' },
        { name: 'MySQL', icon: 'MySQLIcon', meter: '70%' },
        { name: 'SQL Server', icon: 'MicrosoftSQLServerIcon', meter: '60%' },
        { name: 'Snowflake', icon: 'MicrosoftSQLServerIcon', meter: '60%' },
      ],
      frameworks: [
        { name: 'React', icon: 'ReactIcon', meter: '90%' },
        { name: 'Angular', icon: 'AngularIcon', meter: '85%' },
        { name: 'Spring', icon: 'SpringIcon', meter: '80%' },
        { name: 'Flask', icon: 'FlaskIcon', meter: '70%' },
        { name: 'Vue', icon: 'VueIcon', meter: '60%' },
        { name: 'Ionic', icon: 'IonicIcon', meter: '75%' },
        { name: 'jQuery', icon: 'JQueryIcon', meter: '80%' },
        { name: 'Magento 2', icon: 'MagentoIcon', meter: '50%' },
        { name: 'Laravel', icon: 'LaravelIcon', meter: '40%' },
        { name: 'Django', icon: 'DjangoIcon', meter: '60%' },
      ],
      tools: [
        { name: 'Git', icon: 'GitIcon', meter: '95%' },
        { name: 'AWS', icon: 'AWSIcon', meter: '70%' },
        { name: 'Datadog', icon: 'DatadogIcon', meter: '70%' },
        { name: 'Buildkite', icon: 'BuildkiteIcon', meter: '70%' },
        { name: 'Terraform', icon: 'TerraformIcon', meter: '60%' },
        { name: 'Apollo Client', icon: 'GraphQLIcon', meter: '80%' },
        { name: 'Jenkins', icon: 'JestIcon', meter: '70%' },
        { name: 'Serverless', icon: 'ServerlessIcon', meter: '70%' },
        { name: 'Helm', icon: 'HelmIcon', meter: '60%' },
        { name: 'Redux', icon: 'ReduxIcon', meter: '90%' },
        { name: 'Pytest', icon: 'PytestIcon', meter: '75%' },
        { name: 'Cypress', icon: 'CypressIcon', meter: '70%' },
        { name: 'Webpack', icon: 'WebpackIcon', meter: '90%' },
        { name: 'Rollup', icon: 'RollupIcon', meter: '85%' },
        { name: 'Gulp', icon: 'GulpIcon', meter: '80%' },
        { name: 'Jest', icon: 'JestIcon', meter: '80%' },
        { name: 'Jasmine', icon: 'JasmineIcon', meter: '80%' },
        { name: 'Auth0', icon: 'Auth0Icon', meter: '80%' },
        { name: 'Material UI', icon: 'MaterialUIIcon', meter: '80%' },
        { name: 'Cordova', icon: 'CordovaIcon', meter: '50%' },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.skills-container {
  margin-bottom: 80px;

  ul {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    margin-bottom: 40px;
    padding: 0;

    li {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-content: start;
      justify-content: start;
      list-style: none;

      .skill-item {
        display: flex;
        justify-content: start;
        align-items: center;

        .label {
          margin-left: 10px;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .skills-container ul {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
}

.meter {
  width: 150px;
	height: 10px;
	position: relative;
	background: #222;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	padding: 5px;
  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);

  & > span {
    display: block;
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: $color-primary;
    background-image: linear-gradient(
      center bottom,
      $color-primary 37%,
      rgb(84,240,84) 69%
    );
    box-shadow:
      inset 0 2px 9px  rgba(255,255,255,0.3),
      inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
  }
}

.icon {
  width: 20px;
  height: 20px;
  fill: $color-primary;
}
</style>
