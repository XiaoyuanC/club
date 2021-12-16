<template>
  <div>
    <card-title-slot :title="'Activity information management'">
      <div slot="content">
        <el-form class="form1" v-model="searchActForm">
          <el-input v-model="searchActForm.clubName" placeholder="Club Name"></el-input>
          <el-input v-model="searchActForm.actName" placeholder="Activity Name"></el-input>
          <el-input v-model="searchActForm.clubCode" placeholder="Club Code"></el-input>
          <el-input v-model="searchActForm.id" placeholder="Act Code"></el-input>
          <el-button type="primary" @click.stop="searchActInfo()">Search</el-button>
        </el-form>
        <el-table :data="searchClubTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="id" label="Activity Code" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="actName" label="Activity Name" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="Release Date">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column label="Modified Date">
            <template slot-scope="scope">
              {{scope.row.updateDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="300">
            <template slot-scope="scope">
              <el-button type="warning" icon="el-icon-zoom-in" @click.stop="look(scope.row)" circle size="mini"></el-button>
              <el-button type="primary" icon="el-icon-edit" @click.stop="updateDialogShow(scope.row)" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click.stop="deleteAct(scope.row)" circle size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="searchActPage" @currentChange="searchActCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Activity information review'">
      <div slot="content">
        <el-form class="form1" v-model="actTempForm">
          <el-input v-model="actTempForm.clubName" placeholder="Club Name"></el-input>
          <el-input v-model="actTempForm.actName" placeholder="Activity Name"></el-input>
          <el-input v-model="actTempForm.clubCode" placeholder="Club Code"></el-input>
          <el-input v-model="actTempForm.id" placeholder="Activity Code"></el-input>
          <el-button type="primary" @click.stop="searchActInfoTemp()">Search</el-button>
        </el-form>
        <el-table :data="actTempTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="id" label="Activity Code" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="actName" label="Activity Name" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="Release Date">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column label="Modified Date">
            <template slot-scope="scope">
              {{scope.row.updateDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="300">
            <template slot-scope="scope">
              <el-button type="warning" icon="el-icon-zoom-in" @click.stop="look(scope.row)" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-success" @click.stop="passActnfo(scope.row)" circle size="mini"></el-button>
              <el-button type="primary" icon="el-icon-error" @click.stop="passActInfo(scope.row)" circle size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="actTempPage" @currentChange="actTempCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <!-- Modify activity information -->
    <el-dialog :title="'Club Modification'" :visible.sync="actDialogFormVisible">
      <el-form ref="actForm" :model="actForm" :inline="true">
        <el-form-item label="Club Code">
          <el-input :disabled="true" v-model="actForm.clubCode" placeholder="Club Code"></el-input>
        </el-form-item>
        <el-form-item label="Club Name">
          <el-input :disabled="true" v-model="actForm.clubName" placeholder="Club Name"></el-input>
        </el-form-item>
        <el-form-item label="Club Manager">
          <el-input :disabled="true" v-model="actForm.clubPrincipal" placeholder="Club Manager"></el-input>
        </el-form-item>
        <el-form-item label="College">
          <el-input :disabled="true" v-model="actForm.department" placeholder="College"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Activity Code">
          <el-input :disabled="true" v-model="actForm.id" placeholder="Activity Code"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Activity Name">
          <el-input v-model="actForm.actName" placeholder="Activity Name"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Activity Introduction">
        </el-form-item>
        <br />
        <el-input type="textarea" rows="5" placeholder="Please enter content" v-model="actForm.actContent" maxlength="800" show-word-limit>
        </el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.stop="actDialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click.stop="submitForm()">Confirm</el-button>
      </div>
    </el-dialog>
    <!-- View activity information -->
    <el-dialog title="Activity Information" :visible.sync="actInfoVisible">
      <el-form ref="actForm" :model="info" :inline="true">
        <el-form-item label="Club Code">
          <el-input :disabled="true" v-model="info.clubCode" placeholder="Club Code"></el-input>
        </el-form-item>
        <el-form-item label="Club Name">
          <el-input :disabled="true" v-model="info.clubName" placeholder="Club Name"></el-input>
        </el-form-item>
        <el-form-item label="Club Manager">
          <el-input :disabled="true" v-model="info.clubPrincipal" placeholder="Club Manager"></el-input>
        </el-form-item>
        <el-form-item label="College">
          <el-input :disabled="true" v-model="info.department" placeholder="College"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Activity Code">
          <el-input :disabled="true" v-model="info.id" placeholder="Activity Code"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Activity Name">
          <el-input v-model="info.actName" placeholder="Activity Name"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Activity Introduction">
        </el-form-item>
        <br />
        <el-input type="textarea" rows="5" placeholder="Please enter content" v-model="info.actContent" maxlength="800" show-word-limit>
        </el-input>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Blank from "../../components/blank.vue";
import CardSlot from "../../components/cardSlot.vue";
import cardTitleSlot from "../../components/cardTitleSlot.vue";
import Page from "../../components/page.vue";
export default {
  components: { cardTitleSlot, Blank, Page, CardSlot },
  props: {
    club: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      //Club Information Popup
      actDialogFormVisible: false,
      actForm: {},
      clubAdd: true,
      actUpdateUrl: "/api/admin/act/update",
      clubAddUrl: "/api/admin/act/add",
      actDeleteUrl: "/api/admin/act/delete/",
      managerDialogFormVisible: false,
      managerForm: {
        userId: "",
        clubCode: "",
      },
      clubTableData: [],
      clubPage: { current: 1, size: 10 },

      searchClubTableData: [],
      searchActPage: { current: 1, size: 10 },
      searchActForm: {
        clubName: "",
        clubCode: "",
        id: "",
        actName: "",
        page: 0,
        size: 10,
      },

      //Review information
      actTempQueryUrl: "/api/admin/act/temp/query",
      actTempTableData: [],
      actTempForm: { page: 0, size: 10 },
      actTempPage: {},
      //View activity information
      actInfoVisible: false,
      //information
      info: {},
    };
  },
  watch: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.searchActInfo();
      this.searchActInfoTemp();
    },
    searchActInfoTemp() {
      this.actTempForm["page"] = this.actTempPage.current;
      this.actTempForm["size"] = this.actTempPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: this.actTempQueryUrl,
        data: this.actTempForm,
      }).then((result) => {
        this.$loading().close();
        this.actTempTableData = result.data.records;
        this.actTempPage = result.data;
      });
    },
    //View activity information
    look(row) {
      this.info = row;
      this.actInfoVisible = true;
    },
    //Audit activity information passed
    passActnfo(row) {
      this.get({
        url: "/api/admin/act/temp/pass/" + row.id,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.managerDialogFormVisible = false;
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Audit activity information failed
    passActInfo(row) {
      this.get({
        url: "/api/admin/act/temp/forbid/" + row.id,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.searchActInfoTemp();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Delete club information
    deleteAct(row) {
      this.get({
        url: this.actDeleteUrl + row.id,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.searchActInfoTemp();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //club information submission
    submitForm() {
      this.post({
        url: this.actUpdateUrl,
        data: this.actForm,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.actDialogFormVisible = false;
          this.searchActInfo();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Activity modification popup
    updateDialogShow(row) {
      this.clubAdd = false;
      this.actDialogFormVisible = true;
      this.actForm = row;
      this.$nextTick(() => {
        this.$refs["actForm"].resetFields();
      });
    },
    //New popup
    addDialogShow() {
      this.clubAdd = true;
      this.actDialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["actForm"].resetFields();
      });
    },
    //查找活动信息
    searchActInfo() {
      this.searchActForm["page"] = this.searchActPage.current;
      this.searchActForm["size"] = this.searchActPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/common/act/query",
        data: this.searchActForm,
      }).then((result) => {
        this.$loading().close();
        this.searchClubTableData = result.data.records;
        this.searchActPage = result.data;
      });
    },
    //Activity query pagination
    searchActCurrentChange(e) {
      console.log(e);
      this.searchActPage.size = e.size;
      this.searchActPage.current = e.page;
      this.searchActInfo();
    },
    //Club information review
    actTempCurrentChange(e) {
      this.actTempPage.size = e.size;
      this.actTempPage.current = e.page;
      this.searchActInfoTemp();
    },
  },
};
</script>

<style scoped>
.form1 {
  display: flex;
}
.form1 .el-input {
  width: 180px;
  margin-right: 10px;
}
</style>