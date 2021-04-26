import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { FooterGe } from "./general/footer/footer_test";
import MvEmail from "./general/mvEmail/mvEmail";
import MVSpecialPart from "./general/specialPart/mvSpecialPart";
import { TrendingLayout } from "./general/trending/trending_Layout";
import {StoreHeader} from "./general/component/storeHeader";
import {StoreNewIn} from "./general/component/storeNewIn";
import {StoreNew} from "./general/component/storeNew";
function Index() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "98.6%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Switch>
          {/* <Route path="/index" component={BodyHomepage} exact />
        <Route path="/homepage" component={BodyHomepage} exact />
        <Route path="/" component={BodyHomepage} exact />
        <Route path="/about-us" component={AboutUsLayout} exact />
        <Route path="/special-deals" component={SpecialDeals} exact />
        <Route path="/contact-us" component={ContactUsLayout} exact />
        <Route path="/mv-ride-app" component={MotorRideAppLayout} exact />
        <Route path="/dragster800rr" component={BodyDragster800RR} />
        <Route path="/dragster800rrscs" component={Dragster800RR_SCS} />
        <Route path="/brutale1000rr" component={BodyBrutale1000RR} />
        <Route path="/certificate" component={Container} />
        <Route path="/warranty" component={WarrantyLayout} />
        <Route path="/news" component={NewsMV} />
        <Route path="/buy-your-mv" component={BuyYourMvLayout} />

        <Route path="/monaco-design-studio" component={BespokeLayout} />

        <Route path="/reveal-events" component={Reveal2021Page} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/rush1000" component={Rush1000} />
        <Route path="/dragster800rosso" component={Dragster800Rosso} />
        <Route path="/f3-800" component={F3_800_Body} />
        <Route path="/brutale800rr" component={Brutale800RRBody} />
        <Route path="/brutale-800-rr-scs" component={Brutale800RR_SCS_Body} />
        <Route path="/superveloce-alpine" component={SuperveloceAlpine} />*/}
        </Switch>
        <div className="mv-bg" id="main-bg" style={{width : "100vw"}}>
                <StoreHeader />
        </div>
        <StoreNewIn />
        <TrendingLayout></TrendingLayout>
        <StoreNew />
        <MVSpecialPart />
        <MvEmail />
        <FooterGe />
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
