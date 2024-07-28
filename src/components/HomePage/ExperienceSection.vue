<template>
  <div
    id="experience"
    class="experience-container"
    @click="test"
  >
    <h1>Experience</h1>
    <div
      v-for="item in experienceList"
      :key="item.company"
      class="experience-item"
    >
      <div class="experience-title">
        <div class="experience-title-text">
          <h2>{{ item.role }}</h2>
          <h4>
            <a
              :href="item.companyUrl"
              target="_blank"
            >{{ item.company }}</a> | {{ item.dateRange }}
          </h4>
        </div>
        <img 
          :src="item.companyLogo" 
          :alt="`${item.company} Logo`" 
          :width="item.logoSize"
          :style="item.logoHasLightBackground ? `background-color: #efefef;` : null"
        >
      </div>
      <p 
        v-for="(text, index) in item.roleText"
        :key="index"
      >
        {{ text }}
      </p>
      <ul>
        <li
          v-for="(icon, index) in item.icons"
          :key="index"
        >
          <component
            :is="icon"
            class="icon"
          />
        </li>
      </ul>
    </div>
    <div class="download-cv-container">
      <a
        href
        class="download-cv-button"
        @click="downloadCV"
      >
        Download CV
      </a>
    </div>
  </div>
</template>

<script>
import JSIcon from 'simple-icons/icons/javascript.svg';
import PHPIcon from 'simple-icons/icons/php.svg';
import ReactIcon from 'simple-icons/icons/react.svg';
import ReduxIcon from 'simple-icons/icons/redux.svg';
import BabelIcon from 'simple-icons/icons/babel.svg';
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
import GruntIcon from 'simple-icons/icons/grunt.svg';
import MagentoIcon from 'simple-icons/icons/magento.svg';
import LaravelIcon from 'simple-icons/icons/laravel.svg';
import PythonIcon from 'simple-icons/icons/python.svg';
import DjangoIcon from 'simple-icons/icons/django.svg';
import CSharpIcon from 'simple-icons/icons/csharp.svg';
import HTML5Icon from 'simple-icons/icons/html5.svg';
import MySQLIcon from 'simple-icons/icons/mysql.svg';
import PostgresIcon from 'simple-icons/icons/postgresql.svg';
import TerraformIcon from 'simple-icons/icons/terraform.svg';
import JenkinsIcon from 'simple-icons/icons/jenkins.svg';
import KotlinIcon from 'simple-icons/icons/kotlin.svg';
import MicrosoftSQLServerIcon from 'simple-icons/icons/microsoftsqlserver.svg';
import SnowflakeIcon from 'simple-icons/icons/snowflake.svg';
import CypressIcon from 'simple-icons/icons/cypress.svg';
import BuildkiteIcon from 'simple-icons/icons/buildkite.svg';
import HelmIcon from 'simple-icons/icons/helm.svg';
import GradleIcon from 'simple-icons/icons/gradle.svg';
import Auth0Icon from 'simple-icons/icons/auth0.svg';

export default {
  name: "ExperienceSection",
  components: {
    JSIcon,
    PHPIcon,
    ReactIcon,
    ReduxIcon,
    BabelIcon,
    GraphQLIcon,
    JestIcon,
    NodeIcon,
    GoIcon,
    AWSIcon,
    ServerlessIcon,
    WebpackIcon,
    MaterialUIIcon,
    SASSIcon,
    CSS3Icon,
    IonicIcon,
    AngularIcon,
    CordovaIcon,
    TypescriptIcon,
    JavaIcon,
    ApacheIcon,
    NginxIcon,
    GulpIcon,
    GruntIcon,
    MagentoIcon,
    LaravelIcon,
    PythonIcon,
    CSharpIcon,
    HTML5Icon,
    MySQLIcon,
    PostgresIcon,
    DjangoIcon,
    TerraformIcon,
    JenkinsIcon,
    KotlinIcon,
    MicrosoftSQLServerIcon,
    SnowflakeIcon,
    CypressIcon,
    BuildkiteIcon,
    HelmIcon,
    Auth0Icon,
  },
  data: () => {
    return {
      experienceList: [
        {
          role: "Staff Engineer L4",
          company: "Curative",
          companyUrl: "https://curative.com",
          dateRange: "March 2023 to Present",
          companyLogo: "/assets/images/curative.svg",
          logoSize: "60",
          roleText: [
            "I was promoted to the newly created role of Staff Engineer at Curative",
            "My role as a technical lead includes providing technical direction for the team, supporting and mentoring the team members, helping the team's Engineering Manager in creating the work processes, planning the upcoming work and more."
          ],
          icons: [KotlinIcon, TypescriptIcon, PythonIcon, GraphQLIcon, ReactIcon, PostgresIcon, MicrosoftSQLServerIcon, SnowflakeIcon, GradleIcon, ReduxIcon, CypressIcon, BuildkiteIcon, AWSIcon, TerraformIcon, HelmIcon, Auth0Icon]
        },
        {
          role: "Senior Software Engineer L3 - Tech Lead",
          company: "Curative",
          companyUrl: "https://curative.com",
          dateRange: "January 2022 to March 2023",
          companyLogo: "/assets/images/curative.svg",
          logoSize: "60",
          roleText: [
            "I was the technical lead of one of the Product Development teams of the Curative Health Plan project. My team is made up of Full Stack engineers that are able to work in all parts of the platform, including infrastructure work.",
            "My role as a technical lead includes providing technical direction for the team, supporting and mentoring the team members, helping the team's Engineering Manager in creating the work processes, planning the upcoming work, handling external stakeholders, and more."
          ],
          icons: [KotlinIcon, TypescriptIcon, PythonIcon, GraphQLIcon, ReactIcon, PostgresIcon, MicrosoftSQLServerIcon, SnowflakeIcon, GradleIcon, ReduxIcon, CypressIcon, BuildkiteIcon, AWSIcon, TerraformIcon, HelmIcon, Auth0Icon]
        },
        {
          role: "Software Engineer",
          company: "Current Health",
          companyUrl: "https://www.funeralguide.co.uk/",
          dateRange: "August 2020 to January 2022",
          companyLogo: "/assets/images/funeralguide.png",
          logoSize: "100",
          roleText: [
            "Current Health is a company that focuses on delivering quality patient care at home. It provides a selection of devices for continuous vital monitoring and other features focused on patient care. It also provides a platform for HCPs to review patient data, perform a number of operations and be notified in cases of deterioration.",
            "My role at Current Health was primarily to focus on the planning, design, development and deployment of a variety of features and services to support at home patient care. Along with that, I worked alongside leadership to start up three separate Product Development teams, including hiring, process definition, planning and other duties until an Engineering Manager was hired for the team.",
            "One of the teams I helped start up included a dedicated Mobile Development team that worked with a Mobile Development agency,"
          ],
          icons: [JavaIcon, TypescriptIcon, JSIcon, PostgresIcon, PythonIcon, AngularIcon, ReduxIcon, WebpackIcon, JenkinsIcon, JestIcon, NodeIcon, DjangoIcon, IonicIcon, CordovaIcon, AWSIcon, TerraformIcon, MaterialUIIcon, SASSIcon, Auth0Icon]
        },
        {
          role: "Lead Front-End Developer",
          company: "Funeral Guide",
          companyUrl: "https://currenthealth.com/",
          dateRange: "January 2019 to July 2020",
          companyLogo: "/assets/images/currenthealth.png",
          logoSize: "50",
          roleText: [
            "Lead the Front-End development team (between 3 to 7 people at different points in time) for the Arranger product, a web application built using a React, Redux and GraphQL stack. Also responsible for the building and integration process of the Arranger Front-End using AWS services.",
            "Perform 1-to-1s, conflict resolution, technical mentorship and definition of objectives to all Front-End team members. Provide technical and domain direction for the whole Arranger development team, occasionally performing Scrum Master duties.",
            "Support the entire development team with domain knowledge and occasional Backend work using PHP and Node.js. Delivered a reporting gateway solution as AWS Lambda functions written in Go."
          ],
          icons: [JSIcon, ReactIcon, ReduxIcon, BabelIcon, GraphQLIcon, WebpackIcon, JestIcon, NodeIcon, PHPIcon, GoIcon, AWSIcon, ServerlessIcon, MaterialUIIcon, SASSIcon]
        },
        {
          role: "Senior Front-End Developer",
          company: "Oneserve Ltd.",
          companyUrl: "https://www.oneserve.co.uk/",
          dateRange: "October 2017 to December 2018",
          companyLogo: "/assets/images/oneserve.png",
          logoSize: "50",
          roleText: [
            "Lead a small team of developers (between 2 to 3 people) implementing and managing the development lifecycle of a Hybrid Mobile App built using the framework Ionic, along with some services from AWS to support it (Cognito, DynamoDB, API Gateway, Lambda), all deployed via serverless as part of the infrastructure. Provide technical direction and some mentorship to team members.",
            "Development of small features for the Core application written in Java."
          ],
          icons: [TypescriptIcon, IonicIcon, AngularIcon, CordovaIcon, NodeIcon, JavaIcon, WebpackIcon, AWSIcon, ServerlessIcon, SASSIcon]
        },
        {
          role: "Senior Web Developer",
          company: "Sound in Theory Ltd.",
          companyUrl: "https://www.soundintheory.co.uk/",
          dateRange: "August 2016 to October 2017",
          companyLogo: "/assets/images/soundintheory.png",
          logoSize: "50",
          roleText: [
            "Developed websites and storefronts using several PHP frameworks. Worked in technology replacement of a back office quoting engine using React with Flux pattern and Gulp for the build process.",
            "Creation of an automated contact form testing framework. Maintained and configured several servers running Apache and Nginx."
          ],
          icons: [JSIcon, PHPIcon, NodeIcon, ReactIcon, ReduxIcon, BabelIcon, WebpackIcon, GulpIcon, MagentoIcon, LaravelIcon, MySQLIcon, CSS3Icon, NginxIcon, ApacheIcon]
        },
        {
          role: "Software Developer",
          company: "ManyWho Inc.",
          companyUrl: "https://manywho.com/",
          dateRange: "September 2014 to June 2016",
          companyLogo: "/assets/images/manywho.png",
          logoSize: "50",
          roleText: [
            "Developed the primary product (Flow) UI engine using React. Implemented the Front-End of a draw and build tool to create new Flows.",
            "Created a small Python Web Service that converts metadata into Lua code. Designed and implemented workflow solutions using the ManyWho platform and supporting customers on their workflow projects."
          ],
          icons: [JSIcon, ReactIcon, ReduxIcon, BabelIcon, WebpackIcon, GulpIcon, JestIcon, PythonIcon, CSharpIcon, JavaIcon, MaterialUIIcon, SASSIcon]
        },
        {
          role: "Front End Developer",
          company: "blur Group (now Maistro)",
          companyUrl: "https://www.maistro.com/",
          dateRange: "April 2014 to August 2014",
          companyLogo: "/assets/images/blur.png",
          logoSize: "100",
          logoHasLightBackground: true,
          roleText: [
            "Developed the front-end backbone of platforms and dashboards for customers’ use, along with the platforms’ respective styling and continuous improvement of user experience.",
          ],
          icons: [JSIcon, AngularIcon, BabelIcon, GruntIcon, NodeIcon, MaterialUIIcon, CSS3Icon]
        },
        {
          role: "Software Engineer",
          company: "Betweien",
          companyUrl: "https://www.betweien.com/",
          dateRange: "March 2013 to April 2014",
          companyLogo: "/assets/images/betweien.png",
          logoSize: "150",
          roleText: [
            "Developed several websites, web and mobile applications, including management of the remote servers where all the applications developed were hosted.",
          ],
          icons: [JSIcon, PHPIcon, NodeIcon, HTML5Icon, NginxIcon, ApacheIcon, CSS3Icon]
        }
      ]
    }
  },
  methods: {
    downloadCV: event => {
      event.preventDefault();
      window.open("/assets/CV.pdf", "/assets/CV.pdf").focus();
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.experience-container {
  margin-bottom: 80px;
}

.experience-item {
  margin-bottom: 50px;

  .experience-title {
    display: grid;
    grid-template-columns: 4fr 1fr;

    img {
      margin: auto 0;
    }
  }

  a {
    color: $color-primary;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0;

    li {
      list-style: none;
      margin-right: 10px;
    }
  }
}

.icon {
  width: 30px;
  height: 30px;
  fill: $color-primary;
}

.download-cv-container {
  text-align: center;

  .download-cv-button {
    margin: 30px auto;
    padding: 10px;
    background-color: $color-primary;
    border: 1px solid $color-primary-shade;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: $font-primary;

    &:focus,
    &:hover {
      background-color: $color-primary-shade;
    }
  }
}
</style>
