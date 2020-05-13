<template>
  <div>
    <section>
      <h2>Import XLSX</h2>
      <h3> STEP 1: </h3>
        <div class="inputfile-box">
          <input type="file" id="file" class="inputfile" @change='onChange'>
          <label for="file">
            <span id="file-name" class="file-box"></span>
            <span class="file-button">
              Select File
            </span>
          </label>
        </div>
        <transition name="fade">
          <div v-show="fileChosen">
            <h3> STEP 2: </h3>
            <p> Choose sheet </p>
            <xlsx-read :file="file">
              <xlsx-sheets>
                <template #default="{sheets}">
                  <select v-model="selectedSheet" class="sheet-selector">
                    <option v-for="sheet in sheets" :key="sheet" :value="sheet">
                      {{ sheet }}
                    </option>
                  </select>
                </template>
              </xlsx-sheets>
              <xlsx-json :sheet="selectedSheet">
                <template #default="{collection}">
                  <h3> STEP 3: </h3>
                  <div>
                    <button @click="save(collection)" class="save-btn"> Save </button>
                  </div>
                </template>
              </xlsx-json>
            </xlsx-read>
          </div>
        </transition>
    </section>
  </div>
</template>

<script>
import { XlsxRead, XlsxTable, XlsxSheets, XlsxJson, XlsxWorkbook, XlsxSheet, XlsxDownload } from 'vue-xlsx'
import firebase from 'firebase'

export default {
  components: {
    XlsxRead,
    XlsxTable,
    XlsxSheets,
    XlsxJson,
    XlsxWorkbook,
    XlsxSheet,
    XlsxDownload
  },
  data() {
    return {
      file: null,
      selectedSheet: null,
      sheetName: null,
      collection: [],
      sheets: [],
      fileChosen: false
    };
  },
  methods: {
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
      document.getElementById("file-name").innerHTML = event.target.files[0].name;
      this.fileChosen = true;
    },
    addSheet() {
      this.sheets.push({ name: this.sheetName, data: [...this.collection] });
      this.sheetName = null;
    },
    save(collection) {
      collection.forEach((element, id) => {
        firebase.database().ref('data/Wayne/leads').push(element)
      });
    },
    combine(array) {
      const res = array.reduce((res, cur) => {
        Object.keys(cur).forEach(key => {
          if (res[key] !== undefined) {
            res[key] = [...res[key], cur[key]];
          } else {
            res[key] = [cur[key]];
          }
        });
        return res;
      }, {});
      return res
    }
  }
};
</script>

<style>
.inputfile-box {
  position: relative;
}

.inputfile {
  display: none;
}

.container {
  display: inline-block;
  width: 100%;
}

.file-box {
  display: inline-block;
  border: 1px solid;
  padding: 5px 0px 5px 5px;
  box-sizing: border-box;
  height: calc(2rem + 1px);
  width: 20%;
  border: 2px solid #39527c;
}

.file-button {
  background: white;
  padding: 5px;
  position: absolute;
  border: 2px solid #39527c;
  top: 0px;
}

.file-button:hover {
  background: #77b9e5;
}

.sheet-selector {
  width: 20%;
  height: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align-last: center;
  font-size: 1rem;
  color: #2c3e50;
}

.save-btn {
  background: white;
  padding: 5px;
  border: 2px solid #39527c;
  top: 0px;
  width: 20%
}

.save-btn:hover {
  background: #77b9e5;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>