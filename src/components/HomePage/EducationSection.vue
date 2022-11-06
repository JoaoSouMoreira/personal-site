<template>
  <div
    id="education"
    class="education-container"
  >
    <h1>Education</h1>
    <div class="education-item">
      <h2>BSC Computer Engineering</h2>
      <h4>
        <a
          href="https://www.isep.ipp.pt/"
          target="_blank"
        >Institute of Engineering of Porto (ISEP), Porto, Portugal</a> | September 2008 to October 2012
      </h4>
      <p>Learn and applied all aspects of Computer Engineering, including technical Software Development skills, best practices, project management and design, computer hardware and more.</p>
      <ul>
        <li><JavaIcon class="icon" /></li>
        <li><JSIcon class="icon" /></li>
        <li><PHPIcon class="icon" /></li>
        <li><CIcon class="icon" /></li>
        <li><CPlusPlusIcon class="icon" /></li>
        <li><CSharpIcon class="icon" /></li>
        <li><MySQLIcon class="icon" /></li>
        <li><SQLServerIcon class="icon" /></li>
        <li><ApacheIcon class="icon" /></li>
      </ul>
    </div>
    <div class="education-item">
      <h2>High School</h2>
      <h4>
        <a
          href="https://www.esaq.pt/"
          target="_blank"
        >Escola Secundária Antero de Quental</a> | September 2002 – July 2007
      </h4>
      <p>General education around Maths, Sciences, Languages (Portuguese, English and French) and others.</p>
    </div>
    <div class="education-item">
      <h2>iOS Development Course (27 hours)</h2>
      <h4>
        <a
          href="https://www.isep.ipp.pt/"
          target="_blank"
        >Institute of Engineering of Porto (ISEP), Porto, Portugal</a> | March 2014 – April 2014
      </h4>
      <p>Small bootcamp course with the goal of teaching basic iOS development using Objective-C.</p>
      <ul>
        <li><iOSIcon class="icon" /></li>
        <li><CIcon class="icon" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import JavaIcon from 'simple-icons/icons/openjdk.svg';
import JSIcon from 'simple-icons/icons/javascript.svg';
import PHPIcon from 'simple-icons/icons/php.svg';
import CIcon from 'simple-icons/icons/c.svg';
import CPlusPlusIcon from 'simple-icons/icons/cplusplus.svg';
import CSharpIcon from 'simple-icons/icons/csharp.svg';
import MySQLIcon from 'simple-icons/icons/mysql.svg';
import SQLServerIcon from 'simple-icons/icons/microsoftsqlserver.svg';
import ApacheIcon from 'simple-icons/icons/apache.svg';
import iOSIcon from 'simple-icons/icons/ios.svg';

export default {
  name: 'EducationSection',
  components: {
    JavaIcon,
    JSIcon,
    PHPIcon,
    CIcon,
    CPlusPlusIcon,
    CSharpIcon,
    MySQLIcon,
    SQLServerIcon,
    ApacheIcon,
    iOSIcon,
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.education-container {
  margin-bottom: 80px;
}

.education-item {
  margin-bottom: 50px;

  a {
    color: $color-primary;
  }

  ul {
    display: flex;
    flex-direction: row;
    padding-left: 0;

    li {
      list-style: none;
      margin-right: 10px;
    }
  }

  .icon {
    width: 30px;
    height: 30px;
    fill: $color-primary;
  }
}
</style>
