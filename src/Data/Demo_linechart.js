

import React, { useState, useEffect } from "react";

import { chart } from "@rawgraphs/rawgraphs-core";

import {linechart} from "@rawgraphs/rawgraphs-charts";
import Render_graph from "./Render_graph"
import { Resizable } from "react-resizable";
import ResizePanel from "Resize/ResizePanel";

import { data } from "jquery";


const Demo_linechart = ()=> {
  
    const [viz_LineChart, setViz_LineChart_Data] = useState(null);
    useEffect(()=>{
const LineChart = {
            "version": "1.1",
            "userInput": "Category\tFormat\tYear\tyear-date\tUnits\tRevenues in millions\tRevenues in millions (Adjusted for inflation)\r\nTape\t8 - Track\t1973\t1973-01-01\t91\t489\t2815.681824\r\nTape\t8 - Track\t1974\t1974-01-01\t96.7\t549.2\t2848.008609\r\nTape\t8 - Track\t1975\t1975-01-01\t94.6\t583\t2770.409498\r\nTape\t8 - Track\t1976\t1976-01-01\t106.1\t678.2\t3047.215772\r\nTape\t8 - Track\t1977\t1977-01-01\t127.3\t811\t3421.416287\r\nTape\t8 - Track\t1978\t1978-01-01\t133.6\t948\t3717.221411\r\nTape\t8 - Track\t1979\t1979-01-01\t102.3\t684.3\t2409.72569\r\nTape\t8 - Track\t1980\t1980-01-01\t85\t527\t1635.087852\r\nTape\t8 - Track\t1981\t1981-01-01\t50\t313\t880.3150825\r\nTape\t8 - Track\t1982\t1982-01-01\t13.7\t36\t95.37463212\r\nTape\tCassette\t1973\t1973-01-01\t15\t76\t437.6110811\r\nTape\tCassette\t1974\t1974-01-01\t15.3\t87.2\t452.1965598\r\nTape\tCassette\t1975\t1975-01-01\t16.2\t98.8\t469.4964981\r\nTape\tCassette\t1976\t1976-01-01\t21.8\t145.7\t654.6436714\r\nTape\tCassette\t1977\t1977-01-01\t36.9\t249.6\t1053.003089\r\nTape\tCassette\t1978\t1978-01-01\t61.3\t449.8\t1763.71961\r\nTape\tCassette\t1979\t1979-01-01\t78.5\t580.6\t2044.551711\r\nTape\tCassette\t1980\t1980-01-01\t99\t705\t2187.356614\r\nTape\tCassette\t1981\t1981-01-01\t124\t1062.8\t2989.133769\r\nTape\tCassette\t1982\t1982-01-01\t183.2\t1384.5\t3667.949394\r\nTape\tCassette\t1983\t1983-01-01\t236.8\t1810.9\t4648.285756\r\nTape\tCassette\t1984\t1984-01-01\t332\t2383.9\t5865.839483\r\nTape\tCassette\t1985\t1985-01-01\t339.1\t2411.5\t5729.710553\r\nTape\tCassette\t1986\t1986-01-01\t344.5\t2499.5\t5830.425835\r\nTape\tCassette\t1987\t1987-01-01\t410\t2959.7\t6660.810061\r\nTape\tCassette\t1988\t1988-01-01\t450.1\t3385.1\t7315.507276\r\nTape\tCassette\t1989\t1989-01-01\t446.2\t3345.8\t6898.20315\r\nTape\tCassette\t1990\t1990-01-01\t442.2\t3472.4\t6792.221628\r\nTape\tCassette\t1991\t1991-01-01\t360.1\t3019.6\t5668.002035\r\nTape\tCassette\t1992\t1992-01-01\t366.4\t3116.3\t5678.573835\r\nTape\tCassette\t1993\t1993-01-01\t339.5\t2915.8\t5158.786717\r\nTape\tCassette\t1994\t1994-01-01\t345.4\t2976.4\t5134.531004\r\nTape\tCassette\t1995\t1995-01-01\t272.6\t2303.6\t3864.379693\r\nTape\tCassette\t1996\t1996-01-01\t225.3\t1905.3\t3104.546094\r\nTape\tCassette\t1997\t1997-01-01\t172.6\t1522.7\t2425.476099\r\nTape\tCassette\t1998\t1998-01-01\t158.5\t1419.9\t2227.039106\r\nTape\tCassette\t1999\t1999-01-01\t123.6\t1061.6\t1629.084461\r\nTape\tCassette\t2000\t2000-01-01\t76\t626\t929.3918815\r\nTape\tCassette\t2001\t2001-01-01\t45\t363.4\t524.5948831\r\nTape\tCassette\t2002\t2002-01-01\t31.1\t209.8\t298.1480745\r\nTape\tCassette\t2003\t2003-01-01\t17.2\t108.1\t150.1984875\r\nTape\tCassette\t2004\t2004-01-01\t5.2\t23.7\t32.07554738\r\nTape\tCassette\t2005\t2005-01-01\t2.5\t13.1\t17.14852381\r\nTape\tCassette\t2006\t2006-01-01\t0.7\t3.7\t4.69211756\r\nTape\tCassette\t2007\t2007-01-01\t0.4\t3\t3.699811867\r\nTape\tCassette\t2008\t2008-01-01\t0.1\t0.9\t1.068685991\r\nTape\tCassette Single\t1987\t1987-01-01\t5.1\t14.3\t32.18217518\r\nTape\tCassette Single\t1988\t1988-01-01\t22.5\t57.3\t123.8304827\r\nTape\tCassette Single\t1989\t1989-01-01\t76.2\t194.6\t401.21655\r\nTape\tCassette Single\t1990\t1990-01-01\t87.4\t257.9\t504.4677911\r\nTape\tCassette Single\t1991\t1991-01-01\t69\t230.4\t432.4770396\r\nTape\tCassette Single\t1992\t1992-01-01\t84.6\t298.8\t544.4783436\r\nTape\tCassette Single\t1993\t1993-01-01\t85.6\t298.5\t528.1218997\r\nTape\tCassette Single\t1994\t1994-01-01\t81.1\t274.9\t474.2247591\r\nTape\tCassette Single\t1995\t1995-01-01\t70.7\t236.3\t396.4025532\r\nTape\tCassette Single\t1996\t1996-01-01\t59.9\t189.3\t308.4504149\r\nTape\tCassette Single\t1997\t1997-01-01\t42.2\t133.5\t212.6492804\r\nTape\tCassette Single\t1998\t1998-01-01\t26.4\t94.4\t148.0614773\r\nTape\tCassette Single\t1999\t1999-01-01\t14.2\t48\t73.65867947\r\nTape\tCassette Single\t2000\t2000-01-01\t1.3\t4.6\t6.829397213\r\nDisc\tCD\t1983\t1983-01-01\t0.8\t17.2\t44.14960241\r\nDisc\tCD\t1984\t1984-01-01\t5.8\t103.3\t254.1806362\r\nDisc\tCD\t1985\t1985-01-01\t22.6\t389.5\t925.4498281\r\nDisc\tCD\t1986\t1986-01-01\t53\t930.1\t2169.585545\r\nDisc\tCD\t1987\t1987-01-01\t102.1\t1593.6\t3586.399606\r\nDisc\tCD\t1988\t1988-01-01\t149.7\t2089.9\t4516.462927\r\nDisc\tCD\t1989\t1989-01-01\t207.2\t2587.7\t5335.190475\r\nDisc\tCD\t1990\t1990-01-01\t286.5\t3451.6\t6751.535587\r\nDisc\tCD\t1991\t1991-01-01\t333.3\t4337.7\t8142.168641\r\nDisc\tCD\t1992\t1992-01-01\t407.5\t5326.5\t9706.037138\r\nDisc\tCD\t1993\t1993-01-01\t495.4\t6511.4\t11520.31135\r\nDisc\tCD\t1994\t1994-01-01\t662.1\t8464.5\t14601.94788\r\nDisc\tCD\t1995\t1995-01-01\t722.9\t9377.4\t15730.95769\r\nDisc\tCD\t1996\t1996-01-01\t778.9\t9934.7\t16187.86232\r\nDisc\tCD\t1997\t1997-01-01\t753.1\t9915.1\t15793.54966\r\nDisc\tCD\t1998\t1998-01-01\t847\t11416\t17905.40069\r\nDisc\tCD\t1999\t1999-01-01\t938.9\t12816.3\t19667.32779\r\nDisc\tCD\t2000\t2000-01-01\t942.5\t13214.5\t19618.92814\r\nDisc\tCD\t2001\t2001-01-01\t881.9\t12909.4\t18635.67745\r\nDisc\tCD\t2002\t2002-01-01\t803.3\t12044.1\t17115.94482\r\nDisc\tCD\t2003\t2003-01-01\t746\t11232.9\t15607.44302\r\nDisc\tCD\t2004\t2004-01-01\t767\t11446.5\t15491.67735\r\nDisc\tCD\t2005\t2005-01-01\t705.4\t10520.2\t13771.44276\r\nDisc\tCD\t2006\t2006-01-01\t619.7\t9372.6\t11885.76785\r\nDisc\tCD\t2007\t2007-01-01\t499.7\t7452.3\t9190.702658\r\nDisc\tCD\t2008\t2008-01-01\t368.4\t5471.3\t6496.779627\r\nDisc\tCD\t2009\t2009-01-01\t296.6\t4318.8\t5146.57822\r\nDisc\tCD\t2010\t2010-01-01\t253\t3389.4\t3973.859173\r\nDisc\tCD\t2011\t2011-01-01\t240.8\t3100.7\t3524.136143\r\nDisc\tCD\t2012\t2012-01-01\t198.1643872\t2485.614699\t2767.776149\r\nDisc\tCD\t2013\t2013-01-01\t173.7933029\t2140.917718\t2349.534897\r\nDisc\tCD\t2014\t2014-01-01\t138.7023634\t1776.249324\t1918.215115\r\nDisc\tCD\t2015\t2015-01-01\t117.1440518\t1444.993194\t1558.633452\r\nDisc\tCD\t2016\t2016-01-01\t97.5770712\t1130.764651\t1204.497778\r\nDisc\tCD\t2017\t2017-01-01\t87.68249997\t1057.32309\t1102.774352\r\nDisc\tCD\t2018\t2018-01-01\t51.95427564\t698.3866372\t711.0412395\r\nDisc\tCD\t2019\t2019-01-01\t46.50649558\t614.5097799\t614.5097799\r\nDisc\tCD Single\t1988\t1988-01-01\t1.6\t9.8\t21.17868639\r\nDisc\tCD Single\t1990\t1990-01-01\t1.1\t6\t11.73635807\r\nDisc\tCD Single\t1991\t1991-01-01\t5.7\t35.1\t65.88517401\r\nDisc\tCD Single\t1992\t1992-01-01\t7.3\t45.1\t82.1819722\r\nDisc\tCD Single\t1993\t1993-01-01\t7.8\t45.8\t81.03176886\r\nDisc\tCD Single\t1994\t1994-01-01\t9.3\t56.1\t96.77704251\r\nDisc\tCD Single\t1995\t1995-01-01\t21.5\t110.9\t186.0391161\r\nDisc\tCD Single\t1996\t1996-01-01\t43.2\t184.1\t299.9773977\r\nDisc\tCD Single\t1997\t1997-01-01\t66.7\t272.7\t434.3779682\r\nDisc\tCD Single\t1998\t1998-01-01\t56\t213.2\t334.3930822\r\nDisc\tCD Single\t1999\t1999-01-01\t55.9\t222.4\t341.2852149\r\nDisc\tCD Single\t2000\t2000-01-01\t34.2\t142.7\t211.8597787\r\nDisc\tCD Single\t2001\t2001-01-01\t17.3\t79.4\t114.6197956\r\nDisc\tCD Single\t2002\t2002-01-01\t4.5\t19.6\t27.85368093\r\nDisc\tCD Single\t2003\t2003-01-01\t8.3\t36\t50.01984783\r\nDisc\tCD Single\t2004\t2004-01-01\t3.1\t15\t20.30097935\r\nDisc\tCD Single\t2005\t2005-01-01\t2.8\t10.9\t14.26861905\r\nDisc\tCD Single\t2006\t2006-01-01\t1.7\t7.7\t9.764677083\r\nDisc\tCD Single\t2007\t2007-01-01\t2.6\t12.2\t15.04590159\r\nDisc\tCD Single\t2008\t2008-01-01\t0.7\t3.5\t4.156001078\r\nDisc\tCD Single\t2009\t2009-01-01\t0.9\t3.1\t3.694172567\r\nDisc\tCD Single\t2010\t2010-01-01\t1\t2.9\t3.400068331\r\nDisc\tCD Single\t2011\t2011-01-01\t1.3\t3.5\t3.977965137\r\nDisc\tCD Single\t2012\t2012-01-01\t1.072870407\t3.225092945\t3.59119832\r\nDisc\tCD Single\t2013\t2013-01-01\t0.628895398\t2.445737226\t2.684056894\r\nDisc\tCD Single\t2014\t2014-01-01\t0.928725116\t3.616015547\t3.905023683\r\nDisc\tCD Single\t2015\t2015-01-01\t0.386721563\t1.19694661\t1.291079457\r\nDisc\tCD Single\t2016\t2016-01-01\t0.121745255\t0.263199082\t0.280361354\r\nDisc\tCD Single\t2017\t2017-01-01\t0.13261663\t1.478694184\t1.542258972\r\nDisc\tCD Single\t2018\t2018-01-01\t0.020854078\t0.15516984\t0.157981482\r\nDisc\tCD Single\t2019\t2019-01-01\t0.026257455\t0.181678878\t0.181678878\r\nDownload\tDownload Album\t2004\t2004-01-01\t4.6\t45.5\t61.57963737\r\nDownload\tDownload Album\t2005\t2005-01-01\t13.6\t135.7\t177.6377619\r\nDownload\tDownload Album\t2006\t2006-01-01\t27.6\t275.9\t349.8797932\r\nDownload\tDownload Album\t2007\t2007-01-01\t49.8\t497.4\t613.4288075\r\nDownload\tDownload Album\t2008\t2008-01-01\t63.6\t635.3\t754.373567\r\nDownload\tDownload Album\t2009\t2009-01-01\t74.5\t744.3\t886.9589166\r\nDownload\tDownload Album\t2010\t2010-01-01\t85.8\t872.4\t1022.834349\r\nDownload\tDownload Album\t2011\t2011-01-01\t103.9\t1070.8\t1217.03002\r\nDownload\tDownload Album\t2012\t2012-01-01\t116.7336318\t1204.822243\t1341.590983\r\nDownload\tDownload Album\t2013\t2013-01-01\t117.979213\t1232.139716\t1352.202953\r\nDownload\tDownload Album\t2014\t2014-01-01\t114.2304708\t1117.900009\t1207.247578\r\nDownload\tDownload Album\t2015\t2015-01-01\t106.7838841\t1064.433607\t1148.145081\r\nDownload\tDownload Album\t2016\t2016-01-01\t85.12334989\t868.5942684\t925.232201\r\nDownload\tDownload Album\t2017\t2017-01-01\t66.38610376\t668.5007059\t697.2376182\r\nDownload\tDownload Album\t2018\t2018-01-01\t49.73492454\t499.6508324\t508.7043884\r\nDownload\tDownload Album\t2019\t2019-01-01\t40.20271234\t394.5330062\t394.5330062\r\nDownload\tDownload Music Video\t2005\t2005-01-01\t1.9\t3.7\t4.84347619\r\nDownload\tDownload Music Video\t2006\t2006-01-01\t9.9\t19.7\t24.98235566\r\nDownload\tDownload Music Video\t2007\t2007-01-01\t14.2\t28.2\t34.77823155\r\nDownload\tDownload Music Video\t2008\t2008-01-01\t20.8\t41.3\t49.04081272\r\nDownload\tDownload Music Video\t2009\t2009-01-01\t20.5\t40.9\t48.73924451\r\nDownload\tDownload Music Video\t2010\t2010-01-01\t18.4\t36.6\t42.91120721\r\nDownload\tDownload Music Video\t2011\t2011-01-01\t16.3\t32.4\t36.82459156\r\nDownload\tDownload Music Video\t2012\t2012-01-01\t10.473489\t20.842242\t23.20820694\r\nDownload\tDownload Music Video\t2013\t2013-01-01\t8.412464\t16.740803\t18.37207499\r\nDownload\tDownload Music Video\t2014\t2014-01-01\t6.82264392\t13.577058\t14.6621972\r\nDownload\tDownload Music Video\t2015\t2015-01-01\t3.223325002\t6.414419\t6.918875516\r\nDownload\tDownload Music Video\t2016\t2016-01-01\t2.145427196\t4.26940012\t4.547792467\r\nDownload\tDownload Music Video\t2017\t2017-01-01\t1.399889693\t2.785780489\t2.905533136\r\nDownload\tDownload Music Video\t2018\t2018-01-01\t1.115985226\t2.2208106\t2.261051168\r\nDownload\tDownload Music Video\t2019\t2019-01-01\t0.93412583\t1.858910402\t1.858910402\r\nDownload\tDownload Single\t2004\t2004-01-01\t139.4\t138\t186.7690101\r\nDownload\tDownload Single\t2005\t2005-01-01\t366.9\t363.3\t475.577\r\nDownload\tDownload Single\t2006\t2006-01-01\t586.4\t580.6\t736.2820149\r\nDownload\tDownload Single\t2007\t2007-01-01\t819.4\t811\t1000.182475\r\nDownload\tDownload Single\t2008\t2008-01-01\t1042.7\t1032.2\t1225.664089\r\nDownload\tDownload Single\t2009\t2009-01-01\t1124.4\t1172\t1396.635564\r\nDownload\tDownload Single\t2010\t2010-01-01\t1177.4\t1336.4\t1566.845282\r\nDownload\tDownload Single\t2011\t2011-01-01\t1332.3\t1522.4\t1730.301179\r\nDownload\tDownload Single\t2012\t2012-01-01\t1402.739373\t1644.570645\t1831.258646\r\nDownload\tDownload Single\t2013\t2013-01-01\t1332.795366\t1573.420534\t1726.739156\r\nDownload\tDownload Single\t2014\t2014-01-01\t1154.379327\t1355.331251\t1463.655387\r\nDownload\tDownload Single\t2015\t2015-01-01\t986.2550359\t1185.237595\t1278.449595\r\nDownload\tDownload Single\t2016\t2016-01-01\t743.0034138\t900.1814811\t958.8791031\r\nDownload\tDownload Single\t2017\t2017-01-01\t553.5161518\t678.5248883\t707.6927112\r\nDownload\tDownload Single\t2018\t2018-01-01\t399.7738523\t490.4304887\t499.3169742\r\nDownload\tDownload Single\t2019\t2019-01-01\t335.3391935\t414.804251\t414.804251\r\nOther\tDVD Audio\t2001\t2001-01-01\t0.263\t6\t8.661445511\r\nOther\tDVD Audio\t2002\t2002-01-01\t0.43\t8.5\t12.07940245\r\nOther\tDVD Audio\t2003\t2003-01-01\t0.4\t8\t11.11552174\r\nOther\tDVD Audio\t2004\t2004-01-01\t0.3\t6.5\t8.797091053\r\nOther\tDVD Audio\t2005\t2005-01-01\t0.5\t11.2\t14.66133333\r\nOther\tDVD Audio\t2006\t2006-01-01\t0.1\t2.4\t3.043535714\r\nOther\tDVD Audio\t2007\t2007-01-01\t0.2\t2.8\t3.453157742\r\nOther\tDVD Audio\t2008\t2008-01-01\t0.04\t1.2\t1.424914655\r\nOther\tDVD Audio\t2009\t2009-01-01\t0.1\t1.6\t1.906669712\r\nOther\tDVD Audio\t2010\t2010-01-01\t0.04\t0.9\t1.05519362\r\nOther\tDVD Audio\t2011\t2011-01-01\t0.01\t0.3\t0.34096844\r\nOther\tDVD Audio\t2012\t2012-01-01\t0.008533145\t0.183106992\t0.20389289\r\nOther\tDVD Audio\t2014\t2014-01-01\t0.066542722\t2.139460944\t2.310456232\r\nOther\tDVD Audio\t2015\t2015-01-01\t0.179506738\t5.416232673\t5.842187676\r\nOther\tDVD Audio\t2016\t2016-01-01\t0.085898932\t2.83553587\t3.020431045\r\nOther\tDVD Audio\t2017\t2017-01-01\t0.061332251\t2.606840648\t2.718901189\r\nOther\tDVD Audio\t2018\t2018-01-01\t0.092803246\t3.317383752\t3.377493968\r\nOther\tDVD Audio\t2019\t2019-01-01\t0.027982262\t1.067303184\t1.067303184\r\nOther\tKiosk\t2005\t2005-01-01\t0.7\t1\t1.309047619\r\nOther\tKiosk\t2006\t2006-01-01\t1.4\t1.9\t2.409465774\r\nOther\tKiosk\t2007\t2007-01-01\t1.8\t2.6\t3.206503618\r\nOther\tKiosk\t2008\t2008-01-01\t1.6\t2.6\t3.087315086\r\nOther\tKiosk\t2009\t2009-01-01\t1.7\t6.3\t7.507511991\r\nOther\tKiosk\t2010\t2010-01-01\t1.7\t6.4\t7.503599075\r\nOther\tKiosk\t2011\t2011-01-01\t1.3\t2.7\t3.068715963\r\nOther\tKiosk\t2012\t2012-01-01\t1.95507\t3.654065\t4.068866328\r\nOther\tKiosk\t2013\t2013-01-01\t3.7442\t6.183604\t6.786152156\r\nOther\tKiosk\t2014\t2014-01-01\t1.592073358\t2.582636\t2.789051821\r\nOther\tKiosk\t2015\t2015-01-01\t2.202659889\t3.700455\t3.99147413\r\nOther\tKiosk\t2016\t2016-01-01\t1.74878121\t2.943916801\t3.13587911\r\nOther\tKiosk\t2017\t2017-01-01\t1.322377717\t2.25474315\t2.351668038\r\nOther\tKiosk\t2018\t2018-01-01\t1.097856529\t1.965045799\t2.000651969\r\nOther\tKiosk\t2019\t2019-01-01\t0.899703865\t1.586470587\t1.586470587\r\nStreaming\tLimited Tier Paid Subscription\t2016\t2016-01-01\t\t263.3636852\t280.5366913\r\nStreaming\tLimited Tier Paid Subscription\t2017\t2017-01-01\t\t591.6010975\t617.032318\r\nStreaming\tLimited Tier Paid Subscription\t2018\t2018-01-01\t\t747.0549062\t760.591366\r\nStreaming\tLimited Tier Paid Subscription\t2019\t2019-01-01\t\t829.4987397\t829.4987397\r\nVinyl\tLP/EP\t1973\t1973-01-01\t280\t1246\t7174.518514\r\nVinyl\tLP/EP\t1974\t1974-01-01\t276\t1356\t7031.863935\r\nVinyl\tLP/EP\t1975\t1975-01-01\t257\t1485\t7056.703439\r\nVinyl\tLP/EP\t1976\t1976-01-01\t273\t1663\t7472.013902\r\nVinyl\tLP/EP\t1977\t1977-01-01\t344\t2195.1\t9260.605292\r\nVinyl\tLP/EP\t1978\t1978-01-01\t341.3\t2473.3\t9698.105186\r\nVinyl\tLP/EP\t1979\t1979-01-01\t290\t2057\t7243.615\r\nVinyl\tLP/EP\t1980\t1980-01-01\t308\t2200\t6825.793689\r\nVinyl\tLP/EP\t1981\t1981-01-01\t295.2\t2341.7\t6586.050571\r\nVinyl\tLP/EP\t1982\t1982-01-01\t243.9\t1925.1\t5100.158453\r\nVinyl\tLP/EP\t1983\t1983-01-01\t209.6\t1689\t4335.388283\r\nVinyl\tLP/EP\t1984\t1984-01-01\t204.6\t1548.8\t3810.987118\r\nVinyl\tLP/EP\t1985\t1985-01-01\t167\t1280.5\t3042.46086\r\nVinyl\tLP/EP\t1986\t1986-01-01\t125.2\t983\t2292.982035\r\nVinyl\tLP/EP\t1987\t1987-01-01\t107\t793.1\t1784.872946\r\nVinyl\tLP/EP\t1988\t1988-01-01\t72.4\t532.2\t1150.132336\r\nVinyl\tLP/EP\t1989\t1989-01-01\t34.6\t220.3\t454.203525\r\nVinyl\tLP/EP\t1990\t1990-01-01\t11.7\t86.5\t169.1991622\r\nVinyl\tLP/EP\t1991\t1991-01-01\t4.8\t29.4\t55.18587225\r\nVinyl\tLP/EP\t1992\t1992-01-01\t2.3\t13.5\t24.59992516\r\nVinyl\tLP/EP\t1993\t1993-01-01\t1.2\t10.6\t18.75407751\r\nVinyl\tLP/EP\t1994\t1994-01-01\t1.9\t17.8\t30.7064413\r\nVinyl\tLP/EP\t1995\t1995-01-01\t2.2\t25.1\t42.10623819\r\nVinyl\tLP/EP\t1996\t1996-01-01\t2.9\t36.8\t59.96289101\r\nVinyl\tLP/EP\t1997\t1997-01-01\t2.7\t33.3\t53.04285421\r\nVinyl\tLP/EP\t1998\t1998-01-01\t3.4\t34\t53.32722699\r\nVinyl\tLP/EP\t1999\t1999-01-01\t2.9\t31.8\t48.79887515\r\nVinyl\tLP/EP\t2000\t2000-01-01\t2.2\t27.7\t41.12484843\r\nVinyl\tLP/EP\t2001\t2001-01-01\t2.3\t27.4\t39.5539345\r\nVinyl\tLP/EP\t2002\t2002-01-01\t1.743\t20.5\t29.13267649\r\nVinyl\tLP/EP\t2003\t2003-01-01\t1.5\t21.7\t30.15085272\r\nVinyl\tLP/EP\t2004\t2004-01-01\t1.4\t19.3\t26.12059344\r\nVinyl\tLP/EP\t2005\t2005-01-01\t1\t14.2\t18.58847619\r\nVinyl\tLP/EP\t2006\t2006-01-01\t0.9\t15.7\t19.90979613\r\nVinyl\tLP/EP\t2007\t2007-01-01\t1.3\t22.9\t28.24189725\r\nVinyl\tLP/EP\t2008\t2008-01-01\t2.9\t56.7\t67.32721746\r\nVinyl\tLP/EP\t2009\t2009-01-01\t3.5\t63.8\t76.02845477\r\nVinyl\tLP/EP\t2010\t2010-01-01\t4.2\t88.9\t104.2296809\r\nVinyl\tLP/EP\t2011\t2011-01-01\t5.5\t119.4\t135.7054393\r\nVinyl\tLP/EP\t2012\t2012-01-01\t6.915365189\t160.7230583\t178.9679822\r\nVinyl\tLP/EP\t2013\t2013-01-01\t9.35128587\t210.739051\t231.2740702\r\nVinyl\tLP/EP\t2014\t2014-01-01\t10.31556391\t243.8468483\t263.3361791\r\nVinyl\tLP/EP\t2015\t2015-01-01\t13.68102972\t333.3797931\t359.5981629\r\nVinyl\tLP/EP\t2016\t2016-01-01\t14.77088603\t355.430891\t378.607271\r\nVinyl\tLP/EP\t2017\t2017-01-01\t15.55608917\t388.5111082\t405.2120773\r\nVinyl\tLP/EP\t2018\t2018-01-01\t16.67012733\t419.223947\t426.8201866\r\nVinyl\tLP/EP\t2019\t2019-01-01\t19.10316283\t497.5889208\t497.5889208\r\nOther\tMusic Video (Physical)\t1989\t1989-01-01\t6.1\t115.4\t237.92595\r\nOther\tMusic Video (Physical)\t1990\t1990-01-01\t9.2\t172.3\t337.0290826\r\nOther\tMusic Video (Physical)\t1991\t1991-01-01\t6.1\t118.1\t221.6820242\r\nOther\tMusic Video (Physical)\t1992\t1992-01-01\t7.6\t157.4\t286.8169052\r\nOther\tMusic Video (Physical)\t1993\t1993-01-01\t11\t213.3\t377.3815785\r\nOther\tMusic Video (Physical)\t1994\t1994-01-01\t11.2\t231.1\t398.6662126\r\nOther\tMusic Video (Physical)\t1995\t1995-01-01\t12.6\t220.3\t369.5619232\r\nOther\tMusic Video (Physical)\t1996\t1996-01-01\t16.9\t236.1\t384.7075698\r\nOther\tMusic Video (Physical)\t1997\t1997-01-01\t18.6\t323.9\t515.9333477\r\nOther\tMusic Video (Physical)\t1998\t1998-01-01\t27.2\t508\t796.7715092\r\nOther\tMusic Video (Physical)\t1999\t1999-01-01\t19.8\t376.7\t578.0671783\r\nOther\tMusic Video (Physical)\t2000\t2000-01-01\t18.2\t281.9\t418.523277\r\nOther\tMusic Video (Physical)\t2001\t2001-01-01\t17.7\t329.2\t475.2246437\r\nOther\tMusic Video (Physical)\t2002\t2002-01-01\t14.7\t288.4\t409.8470195\r\nOther\tMusic Video (Physical)\t2003\t2003-01-01\t19.9\t399.9\t555.6371429\r\nOther\tMusic Video (Physical)\t2004\t2004-01-01\t32.8\t607.2\t821.7836443\r\nOther\tMusic Video (Physical)\t2005\t2005-01-01\t33.8\t602.2\t788.3084762\r\nOther\tMusic Video (Physical)\t2006\t2006-01-01\t23.2\t451.1\t572.0579003\r\nOther\tMusic Video (Physical)\t2007\t2007-01-01\t27.5\t484.9\t598.0129247\r\nOther\tMusic Video (Physical)\t2008\t2008-01-01\t13.2\t227.3\t269.9025843\r\nOther\tMusic Video (Physical)\t2009\t2009-01-01\t11.6\t209.6\t249.7737323\r\nOther\tMusic Video (Physical)\t2010\t2010-01-01\t9.1\t177.6\t208.2248743\r\nOther\tMusic Video (Physical)\t2011\t2011-01-01\t7.7\t151\t171.6207816\r\nOther\tMusic Video (Physical)\t2012\t2012-01-01\t6.032725467\t116.6136546\t129.8513772\r\nOther\tMusic Video (Physical)\t2013\t2013-01-01\t4.814626524\t106.2831378\t116.6396724\r\nOther\tMusic Video (Physical)\t2014\t2014-01-01\t4.065323601\t89.70557988\t96.87525106\r\nOther\tMusic Video (Physical)\t2015\t2015-01-01\t3.133228006\t70.43436396\t75.97361449\r\nOther\tMusic Video (Physical)\t2016\t2016-01-01\t2.495531725\t56.92290281\t60.63464218\r\nOther\tMusic Video (Physical)\t2017\t2017-01-01\t1.87712837\t38.619447\t40.27958535\r\nOther\tMusic Video (Physical)\t2018\t2018-01-01\t1.395058021\t27.5612603\t28.06066388\r\nOther\tMusic Video (Physical)\t2019\t2019-01-01\t1.32294236\t27.70524678\t27.70524678\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2011\t2011-01-01\t\t113.8\t129.340695\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2012\t2012-01-01\t\t170.9354084\t190.3396156\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2013\t2013-01-01\t\t220.8735445\t242.3960978\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2014\t2014-01-01\t\t283.7934094\t306.475448\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2015\t2015-01-01\t\t371.9903964\t401.2452641\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2016\t2016-01-01\t\t489.3776076\t521.288175\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2017\t2017-01-01\t\t658.6064926\t686.9180813\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2018\t2018-01-01\t\t759.5323682\t773.2949167\r\nStreaming\tOn-Demand Streaming (Ad-Supported)\t2019\t2019-01-01\t\t908.1493305\t908.1493305\r\nStreaming\tOther Ad-Supported Streaming\t2016\t2016-01-01\t\t81.26086562\t86.55959668\r\nStreaming\tOther Ad-Supported Streaming\t2017\t2017-01-01\t\t261.786859\t273.040319\r\nStreaming\tOther Ad-Supported Streaming\t2018\t2018-01-01\t\t251.4119188\t255.9674439\r\nStreaming\tOther Ad-Supported Streaming\t2019\t2019-01-01\t\t251.0647101\t251.0647101\r\nDownload\tOther Digital\t2016\t2016-01-01\t\t17.14166287\t18.25940954\r\nDownload\tOther Digital\t2017\t2017-01-01\t\t16.88510987\t17.61095192\r\nDownload\tOther Digital\t2018\t2018-01-01\t\t19.83957487\t20.19906331\r\nDownload\tOther Digital\t2019\t2019-01-01\t\t21.51717501\t21.51717501\r\nTape\tOther Tapes\t1973\t1973-01-01\t2.2\t15.6\t89.82543243\r\nTape\tOther Tapes\t1974\t1974-01-01\t1.9\t13.3\t68.97034686\r\nTape\tOther Tapes\t1975\t1975-01-01\t1.5\t10.2\t48.47028625\r\nTape\tOther Tapes\t1976\t1976-01-01\t0.7\t5.1\t22.91477504\r\nStreaming\tPaid Subscription\t2005\t2005-01-01\t\t149.2\t195.3099048\r\nStreaming\tPaid Subscription\t2006\t2006-01-01\t\t206.2\t261.4904435\r\nStreaming\tPaid Subscription\t2007\t2007-01-01\t\t234\t288.5853256\r\nStreaming\tPaid Subscription\t2008\t2008-01-01\t\t221.4\t262.8967539\r\nStreaming\tPaid Subscription\t2009\t2009-01-01\t\t206.2\t245.7220591\r\nStreaming\tPaid Subscription\t2010\t2010-01-01\t\t212.4\t249.0256943\r\nStreaming\tPaid Subscription\t2011\t2011-01-01\t\t247.8\t281.6399317\r\nStreaming\tPaid Subscription\t2012\t2012-01-01\t\t399.8825311\t445.2763062\r\nStreaming\tPaid Subscription\t2013\t2013-01-01\t\t643.3242888\t706.0116575\r\nStreaming\tPaid Subscription\t2014\t2014-01-01\t\t770.2705591\t831.8340275\r\nStreaming\tPaid Subscription\t2015\t2015-01-01\t\t1156.708514\t1247.676869\r\nStreaming\tPaid Subscription\t2016\t2016-01-01\t\t2244.154254\t2390.487545\r\nStreaming\tPaid Subscription\t2017\t2017-01-01\t\t3500.549813\t3651.028327\r\nStreaming\tPaid Subscription\t2018\t2018-01-01\t\t4655.968522\t4740.333581\r\nStreaming\tPaid Subscription\t2019\t2019-01-01\t\t5934.397625\t5934.397625\r\nDownload\tRingtones & Ringbacks\t2005\t2005-01-01\t170\t421.6\t551.8944762\r\nDownload\tRingtones & Ringbacks\t2006\t2006-01-01\t315\t773.8\t981.2866399\r\nDownload\tRingtones & Ringbacks\t2007\t2007-01-01\t433.8\t1055.8\t1302.087123\r\nDownload\tRingtones & Ringbacks\t2008\t2008-01-01\t405.1\t977.1\t1160.236758\r\nDownload\tRingtones & Ringbacks\t2009\t2009-01-01\t294.3\t702.8\t837.504671\r\nDownload\tRingtones & Ringbacks\t2010\t2010-01-01\t188.5\t448\t525.2519353\r\nDownload\tRingtones & Ringbacks\t2011\t2011-01-01\t115.4\t276.2\t313.9182774\r\nDownload\tRingtones & Ringbacks\t2012\t2012-01-01\t58.75740356\t145.9929351\t162.5657282\r\nDownload\tRingtones & Ringbacks\t2013\t2013-01-01\t39.36623578\t97.99961233\t107.5489764\r\nDownload\tRingtones & Ringbacks\t2014\t2014-01-01\t26.63232368\t66.31137067\t71.61127201\r\nDownload\tRingtones & Ringbacks\t2015\t2015-01-01\t21.92486605\t54.58202422\t58.87458101\r\nDownload\tRingtones & Ringbacks\t2016\t2016-01-01\t22.62078539\t56.32529913\t59.99807088\r\nDownload\tRingtones & Ringbacks\t2017\t2017-01-01\t14.26286994\t35.51373565\t37.04036846\r\nDownload\tRingtones & Ringbacks\t2018\t2018-01-01\t10.02628673\t24.9578598\t25.41009037\r\nDownload\tRingtones & Ringbacks\t2019\t2019-01-01\t8.605769716\t21.4267369\t21.4267369\r\nDisc\tSACD\t2003\t2003-01-01\t1.3\t26.3\t36.54227772\r\nDisc\tSACD\t2004\t2004-01-01\t0.8\t16.6\t22.46641715\r\nDisc\tSACD\t2005\t2005-01-01\t0.5\t10\t13.09047619\r\nDisc\tSACD\t2006\t2006-01-01\t0.3\t5.5\t6.974769345\r\nDisc\tSACD\t2007\t2007-01-01\t0.2\t3.6\t4.43977424\r\nDisc\tSACD\t2008\t2008-01-01\t0.1\t3.1\t3.681029526\r\nDisc\tSACD\t2009\t2009-01-01\t0.1\t2.4\t2.860004568\r\nDisc\tSACD\t2010\t2010-01-01\t0.1\t1.7\t1.993143504\r\nDisc\tSACD\t2011\t2011-01-01\t0.1\t1.5\t1.704842202\r\nDisc\tSACD\t2012\t2012-01-01\t0.065446\t1.3425\t1.494897613\r\nDisc\tSACD\t2013\t2013-01-01\t0.044683\t0.9783826\t1.073719014\r\nDisc\tSACD\t2014\t2014-01-01\t0.030486\t0.76344539\t0.82446336\r\nDisc\tSACD\t2015\t2015-01-01\t0.041633\t1.04346656\t1.125529098\r\nDisc\tSACD\t2016\t2016-01-01\t0.045272\t1.20686148\t1.28555661\r\nDisc\tSACD\t2017\t2017-01-01\t0.032749\t0.85057856\t0.887142473\r\nDisc\tSACD\t2018\t2018-01-01\t0.032804\t0.85969971\t0.875277267\r\nDisc\tSACD\t2019\t2019-01-01\t0.017654\t0.433302292\t0.433302292\r\nStreaming\tSoundExchange Distributions\t2004\t2004-01-01\t\t6.9\t9.338450503\r\nStreaming\tSoundExchange Distributions\t2005\t2005-01-01\t\t20.4\t26.70457143\r\nStreaming\tSoundExchange Distributions\t2006\t2006-01-01\t\t32.8\t41.5949881\r\nStreaming\tSoundExchange Distributions\t2007\t2007-01-01\t\t36.2\t44.64439653\r\nStreaming\tSoundExchange Distributions\t2008\t2008-01-01\t\t100\t118.7428879\r\nStreaming\tSoundExchange Distributions\t2009\t2009-01-01\t\t155.5\t185.3044626\r\nStreaming\tSoundExchange Distributions\t2010\t2010-01-01\t\t249.2\t292.171389\r\nStreaming\tSoundExchange Distributions\t2011\t2011-01-01\t\t292\t331.8759486\r\nStreaming\tSoundExchange Distributions\t2012\t2012-01-01\t\t462\t514.445212\r\nStreaming\tSoundExchange Distributions\t2013\t2013-01-01\t\t590.4\t647.9302738\r\nStreaming\tSoundExchange Distributions\t2014\t2014-01-01\t\t773.4\t835.2135873\r\nStreaming\tSoundExchange Distributions\t2015\t2015-01-01\t\t802.6\t865.7197931\r\nStreaming\tSoundExchange Distributions\t2016\t2016-01-01\t\t883.9\t941.5359648\r\nStreaming\tSoundExchange Distributions\t2017\t2017-01-01\t\t652\t680.0275946\r\nStreaming\tSoundExchange Distributions\t2018\t2018-01-01\t\t952.8\t970.0645127\r\nStreaming\tSoundExchange Distributions\t2019\t2019-01-01\t\t908.2\t908.2\r\nOther\tSynchronization\t2009\t2009-01-01\t\t201.2\t239.7637163\r\nOther\tSynchronization\t2010\t2010-01-01\t\t188.7\t221.238929\r\nOther\tSynchronization\t2011\t2011-01-01\t\t196.5\t223.3343284\r\nOther\tSynchronization\t2012\t2012-01-01\t\t190.597753\t212.2339858\r\nOther\tSynchronization\t2013\t2013-01-01\t\t189.679434\t208.1623435\r\nOther\tSynchronization\t2014\t2014-01-01\t\t189.713099\t204.8758184\r\nOther\tSynchronization\t2015\t2015-01-01\t\t202.934888\t218.8945293\r\nOther\tSynchronization\t2016\t2016-01-01\t\t214.8389765\t228.8478595\r\nOther\tSynchronization\t2017\t2017-01-01\t\t232.0865229\t242.0632514\r\nOther\tSynchronization\t2018\t2018-01-01\t\t285.5134913\t290.6869289\r\nOther\tSynchronization\t2019\t2019-01-01\t\t276.2623602\t276.2623602\r\nVinyl\tVinyl Single\t1973\t1973-01-01\t228\t190\t1094.027703\r\nVinyl\tVinyl Single\t1974\t1974-01-01\t204\t194\t1006.033631\r\nVinyl\tVinyl Single\t1975\t1975-01-01\t164\t211.5\t1005.045641\r\nVinyl\tVinyl Single\t1976\t1976-01-01\t190\t245.1\t1101.25713\r\nVinyl\tVinyl Single\t1977\t1977-01-01\t190\t245.1\t1034.018658\r\nVinyl\tVinyl Single\t1978\t1978-01-01\t190\t260.3\t1020.66744\r\nVinyl\tVinyl Single\t1979\t1979-01-01\t212\t353.6\t1245.183405\r\nVinyl\tVinyl Single\t1980\t1980-01-01\t157\t250\t775.6583738\r\nVinyl\tVinyl Single\t1981\t1981-01-01\t154.7\t256.4\t721.1271155\r\nVinyl\tVinyl Single\t1982\t1982-01-01\t137.2\t283\t749.7505803\r\nVinyl\tVinyl Single\t1983\t1983-01-01\t124.8\t269.3\t691.2492982\r\nVinyl\tVinyl Single\t1984\t1984-01-01\t131.5\t298.7\t734.9831174\r\nVinyl\tVinyl Single\t1985\t1985-01-01\t120.7\t281\t667.6544331\r\nVinyl\tVinyl Single\t1986\t1986-01-01\t93.9\t228.1\t532.0744681\r\nVinyl\tVinyl Single\t1987\t1987-01-01\t82\t203.3\t457.5270079\r\nVinyl\tVinyl Single\t1988\t1988-01-01\t65.6\t180.4\t389.8607168\r\nVinyl\tVinyl Single\t1989\t1989-01-01\t36.6\t116.4\t239.9877\r\nVinyl\tVinyl Single\t1990\t1990-01-01\t27.6\t94.4\t184.6520337\r\nVinyl\tVinyl Single\t1991\t1991-01-01\t22\t63.9\t119.944804\r\nVinyl\tVinyl Single\t1992\t1992-01-01\t19.8\t66.4\t120.9951875\r\nVinyl\tVinyl Single\t1993\t1993-01-01\t15.1\t51.2\t90.58573287\r\nVinyl\tVinyl Single\t1994\t1994-01-01\t11.7\t47.2\t81.42382186\r\nVinyl\tVinyl Single\t1995\t1995-01-01\t10.2\t46.7\t78.34108858\r\nVinyl\tVinyl Single\t1996\t1996-01-01\t10.1\t47.5\t77.39775335\r\nVinyl\tVinyl Single\t1997\t1997-01-01\t7.5\t35.6\t56.70647477\r\nVinyl\tVinyl Single\t1998\t1998-01-01\t5.4\t25.7\t40.30910982\r\nVinyl\tVinyl Single\t1999\t1999-01-01\t5.3\t27.9\t42.81410744\r\nVinyl\tVinyl Single\t2000\t2000-01-01\t4.8\t26.3\t39.04633624\r\nVinyl\tVinyl Single\t2001\t2001-01-01\t5.5\t31.4\t45.32823151\r\nVinyl\tVinyl Single\t2002\t2002-01-01\t4.4\t24.9\t35.38554364\r\nVinyl\tVinyl Single\t2003\t2003-01-01\t3.8\t21.5\t29.87296467\r\nVinyl\tVinyl Single\t2004\t2004-01-01\t3.5\t19.9\t26.93263261\r\nVinyl\tVinyl Single\t2005\t2005-01-01\t2.3\t13.2\t17.27942857\r\nVinyl\tVinyl Single\t2006\t2006-01-01\t1.5\t9.9\t12.55458482\r\nVinyl\tVinyl Single\t2007\t2007-01-01\t0.6\t4\t4.933082489\r\nVinyl\tVinyl Single\t2008\t2008-01-01\t0.4\t2.9\t3.44354375\r\nVinyl\tVinyl Single\t2009\t2009-01-01\t0.3\t2.5\t2.979171425\r\nVinyl\tVinyl Single\t2010\t2010-01-01\t0.3\t2.3\t2.696605918\r\nVinyl\tVinyl Single\t2011\t2011-01-01\t0.4\t4.6\t5.228182752\r\nVinyl\tVinyl Single\t2012\t2012-01-01\t0.388573687\t4.743055893\t5.281477044\r\nVinyl\tVinyl Single\t2013\t2013-01-01\t0.315817054\t2.978937179\t3.269213385\r\nVinyl\tVinyl Single\t2014\t2014-01-01\t0.481198278\t5.49935429\t5.938887283\r\nVinyl\tVinyl Single\t2015\t2015-01-01\t0.50786991\t5.752954082\t6.205390253\r\nVinyl\tVinyl Single\t2016\t2016-01-01\t0.404330651\t4.880679689\t5.198931395\r\nVinyl\tVinyl Single\t2017\t2017-01-01\t0.402959365\t6.07838535\t6.33967756\r\nVinyl\tVinyl Single\t2018\t2018-01-01\t0.346165002\t5.290337079\t5.386196747\r\nVinyl\tVinyl Single\t2019\t2019-01-01\t0.336120488\t6.795945687\t6.795945687",
            "userInputFormat": "csv",
            "dataSource": {
              "type": "sample"
            },
            "rawData": [
              [
                "Tape",
                "8 - Track",
                "1973",
                "1973-01-01",
                "91",
                "489",
                "2815.681824"
              ],
              [
                "Tape",
                "8 - Track",
                "1974",
                "1974-01-01",
                "96.7",
                "549.2",
                "2848.008609"
              ],
              [
                "Tape",
                "8 - Track",
                "1975",
                "1975-01-01",
                "94.6",
                "583",
                "2770.409498"
              ],
              [
                "Tape",
                "8 - Track",
                "1976",
                "1976-01-01",
                "106.1",
                "678.2",
                "3047.215772"
              ],
              [
                "Tape",
                "8 - Track",
                "1977",
                "1977-01-01",
                "127.3",
                "811",
                "3421.416287"
              ],
              [
                "Tape",
                "8 - Track",
                "1978",
                "1978-01-01",
                "133.6",
                "948",
                "3717.221411"
              ],
              [
                "Tape",
                "8 - Track",
                "1979",
                "1979-01-01",
                "102.3",
                "684.3",
                "2409.72569"
              ],
              [
                "Tape",
                "8 - Track",
                "1980",
                "1980-01-01",
                "85",
                "527",
                "1635.087852"
              ],
              [
                "Tape",
                "8 - Track",
                "1981",
                "1981-01-01",
                "50",
                "313",
                "880.3150825"
              ],
              [
                "Tape",
                "8 - Track",
                "1982",
                "1982-01-01",
                "13.7",
                "36",
                "95.37463212"
              ],
              [
                "Tape",
                "Cassette",
                "1973",
                "1973-01-01",
                "15",
                "76",
                "437.6110811"
              ],
              [
                "Tape",
                "Cassette",
                "1974",
                "1974-01-01",
                "15.3",
                "87.2",
                "452.1965598"
              ],
              [
                "Tape",
                "Cassette",
                "1975",
                "1975-01-01",
                "16.2",
                "98.8",
                "469.4964981"
              ],
              [
                "Tape",
                "Cassette",
                "1976",
                "1976-01-01",
                "21.8",
                "145.7",
                "654.6436714"
              ],
              [
                "Tape",
                "Cassette",
                "1977",
                "1977-01-01",
                "36.9",
                "249.6",
                "1053.003089"
              ],
              [
                "Tape",
                "Cassette",
                "1978",
                "1978-01-01",
                "61.3",
                "449.8",
                "1763.71961"
              ],
              [
                "Tape",
                "Cassette",
                "1979",
                "1979-01-01",
                "78.5",
                "580.6",
                "2044.551711"
              ],
              [
                "Tape",
                "Cassette",
                "1980",
                "1980-01-01",
                "99",
                "705",
                "2187.356614"
              ],
              [
                "Tape",
                "Cassette",
                "1981",
                "1981-01-01",
                "124",
                "1062.8",
                "2989.133769"
              ],
              [
                "Tape",
                "Cassette",
                "1982",
                "1982-01-01",
                "183.2",
                "1384.5",
                "3667.949394"
              ],
              [
                "Tape",
                "Cassette",
                "1983",
                "1983-01-01",
                "236.8",
                "1810.9",
                "4648.285756"
              ],
              [
                "Tape",
                "Cassette",
                "1984",
                "1984-01-01",
                "332",
                "2383.9",
                "5865.839483"
              ],
              [
                "Tape",
                "Cassette",
                "1985",
                "1985-01-01",
                "339.1",
                "2411.5",
                "5729.710553"
              ],
              [
                "Tape",
                "Cassette",
                "1986",
                "1986-01-01",
                "344.5",
                "2499.5",
                "5830.425835"
              ],
              [
                "Tape",
                "Cassette",
                "1987",
                "1987-01-01",
                "410",
                "2959.7",
                "6660.810061"
              ],
              [
                "Tape",
                "Cassette",
                "1988",
                "1988-01-01",
                "450.1",
                "3385.1",
                "7315.507276"
              ],
              [
                "Tape",
                "Cassette",
                "1989",
                "1989-01-01",
                "446.2",
                "3345.8",
                "6898.20315"
              ],
              [
                "Tape",
                "Cassette",
                "1990",
                "1990-01-01",
                "442.2",
                "3472.4",
                "6792.221628"
              ],
              [
                "Tape",
                "Cassette",
                "1991",
                "1991-01-01",
                "360.1",
                "3019.6",
                "5668.002035"
              ],
              [
                "Tape",
                "Cassette",
                "1992",
                "1992-01-01",
                "366.4",
                "3116.3",
                "5678.573835"
              ],
              [
                "Tape",
                "Cassette",
                "1993",
                "1993-01-01",
                "339.5",
                "2915.8",
                "5158.786717"
              ],
              [
                "Tape",
                "Cassette",
                "1994",
                "1994-01-01",
                "345.4",
                "2976.4",
                "5134.531004"
              ],
              [
                "Tape",
                "Cassette",
                "1995",
                "1995-01-01",
                "272.6",
                "2303.6",
                "3864.379693"
              ],
              [
                "Tape",
                "Cassette",
                "1996",
                "1996-01-01",
                "225.3",
                "1905.3",
                "3104.546094"
              ],
              [
                "Tape",
                "Cassette",
                "1997",
                "1997-01-01",
                "172.6",
                "1522.7",
                "2425.476099"
              ],
              [
                "Tape",
                "Cassette",
                "1998",
                "1998-01-01",
                "158.5",
                "1419.9",
                "2227.039106"
              ],
              [
                "Tape",
                "Cassette",
                "1999",
                "1999-01-01",
                "123.6",
                "1061.6",
                "1629.084461"
              ],
              [
                "Tape",
                "Cassette",
                "2000",
                "2000-01-01",
                "76",
                "626",
                "929.3918815"
              ],
              [
                "Tape",
                "Cassette",
                "2001",
                "2001-01-01",
                "45",
                "363.4",
                "524.5948831"
              ],
              [
                "Tape",
                "Cassette",
                "2002",
                "2002-01-01",
                "31.1",
                "209.8",
                "298.1480745"
              ],
              [
                "Tape",
                "Cassette",
                "2003",
                "2003-01-01",
                "17.2",
                "108.1",
                "150.1984875"
              ],
              [
                "Tape",
                "Cassette",
                "2004",
                "2004-01-01",
                "5.2",
                "23.7",
                "32.07554738"
              ],
              [
                "Tape",
                "Cassette",
                "2005",
                "2005-01-01",
                "2.5",
                "13.1",
                "17.14852381"
              ],
              [
                "Tape",
                "Cassette",
                "2006",
                "2006-01-01",
                "0.7",
                "3.7",
                "4.69211756"
              ],
              [
                "Tape",
                "Cassette",
                "2007",
                "2007-01-01",
                "0.4",
                "3",
                "3.699811867"
              ],
              [
                "Tape",
                "Cassette",
                "2008",
                "2008-01-01",
                "0.1",
                "0.9",
                "1.068685991"
              ],
              [
                "Tape",
                "Cassette Single",
                "1987",
                "1987-01-01",
                "5.1",
                "14.3",
                "32.18217518"
              ],
              [
                "Tape",
                "Cassette Single",
                "1988",
                "1988-01-01",
                "22.5",
                "57.3",
                "123.8304827"
              ],
              [
                "Tape",
                "Cassette Single",
                "1989",
                "1989-01-01",
                "76.2",
                "194.6",
                "401.21655"
              ],
              [
                "Tape",
                "Cassette Single",
                "1990",
                "1990-01-01",
                "87.4",
                "257.9",
                "504.4677911"
              ],
              [
                "Tape",
                "Cassette Single",
                "1991",
                "1991-01-01",
                "69",
                "230.4",
                "432.4770396"
              ],
              [
                "Tape",
                "Cassette Single",
                "1992",
                "1992-01-01",
                "84.6",
                "298.8",
                "544.4783436"
              ],
              [
                "Tape",
                "Cassette Single",
                "1993",
                "1993-01-01",
                "85.6",
                "298.5",
                "528.1218997"
              ],
              [
                "Tape",
                "Cassette Single",
                "1994",
                "1994-01-01",
                "81.1",
                "274.9",
                "474.2247591"
              ],
              [
                "Tape",
                "Cassette Single",
                "1995",
                "1995-01-01",
                "70.7",
                "236.3",
                "396.4025532"
              ],
              [
                "Tape",
                "Cassette Single",
                "1996",
                "1996-01-01",
                "59.9",
                "189.3",
                "308.4504149"
              ],
              [
                "Tape",
                "Cassette Single",
                "1997",
                "1997-01-01",
                "42.2",
                "133.5",
                "212.6492804"
              ],
              [
                "Tape",
                "Cassette Single",
                "1998",
                "1998-01-01",
                "26.4",
                "94.4",
                "148.0614773"
              ],
              [
                "Tape",
                "Cassette Single",
                "1999",
                "1999-01-01",
                "14.2",
                "48",
                "73.65867947"
              ],
              [
                "Tape",
                "Cassette Single",
                "2000",
                "2000-01-01",
                "1.3",
                "4.6",
                "6.829397213"
              ],
              [
                "Disc",
                "CD",
                "1983",
                "1983-01-01",
                "0.8",
                "17.2",
                "44.14960241"
              ],
              [
                "Disc",
                "CD",
                "1984",
                "1984-01-01",
                "5.8",
                "103.3",
                "254.1806362"
              ],
              [
                "Disc",
                "CD",
                "1985",
                "1985-01-01",
                "22.6",
                "389.5",
                "925.4498281"
              ],
              [
                "Disc",
                "CD",
                "1986",
                "1986-01-01",
                "53",
                "930.1",
                "2169.585545"
              ],
              [
                "Disc",
                "CD",
                "1987",
                "1987-01-01",
                "102.1",
                "1593.6",
                "3586.399606"
              ],
              [
                "Disc",
                "CD",
                "1988",
                "1988-01-01",
                "149.7",
                "2089.9",
                "4516.462927"
              ],
              [
                "Disc",
                "CD",
                "1989",
                "1989-01-01",
                "207.2",
                "2587.7",
                "5335.190475"
              ],
              [
                "Disc",
                "CD",
                "1990",
                "1990-01-01",
                "286.5",
                "3451.6",
                "6751.535587"
              ],
              [
                "Disc",
                "CD",
                "1991",
                "1991-01-01",
                "333.3",
                "4337.7",
                "8142.168641"
              ],
              [
                "Disc",
                "CD",
                "1992",
                "1992-01-01",
                "407.5",
                "5326.5",
                "9706.037138"
              ],
              [
                "Disc",
                "CD",
                "1993",
                "1993-01-01",
                "495.4",
                "6511.4",
                "11520.31135"
              ],
              [
                "Disc",
                "CD",
                "1994",
                "1994-01-01",
                "662.1",
                "8464.5",
                "14601.94788"
              ],
              [
                "Disc",
                "CD",
                "1995",
                "1995-01-01",
                "722.9",
                "9377.4",
                "15730.95769"
              ],
              [
                "Disc",
                "CD",
                "1996",
                "1996-01-01",
                "778.9",
                "9934.7",
                "16187.86232"
              ],
              [
                "Disc",
                "CD",
                "1997",
                "1997-01-01",
                "753.1",
                "9915.1",
                "15793.54966"
              ],
              [
                "Disc",
                "CD",
                "1998",
                "1998-01-01",
                "847",
                "11416",
                "17905.40069"
              ],
              [
                "Disc",
                "CD",
                "1999",
                "1999-01-01",
                "938.9",
                "12816.3",
                "19667.32779"
              ],
              [
                "Disc",
                "CD",
                "2000",
                "2000-01-01",
                "942.5",
                "13214.5",
                "19618.92814"
              ],
              [
                "Disc",
                "CD",
                "2001",
                "2001-01-01",
                "881.9",
                "12909.4",
                "18635.67745"
              ],
              [
                "Disc",
                "CD",
                "2002",
                "2002-01-01",
                "803.3",
                "12044.1",
                "17115.94482"
              ],
              [
                "Disc",
                "CD",
                "2003",
                "2003-01-01",
                "746",
                "11232.9",
                "15607.44302"
              ],
              [
                "Disc",
                "CD",
                "2004",
                "2004-01-01",
                "767",
                "11446.5",
                "15491.67735"
              ],
              [
                "Disc",
                "CD",
                "2005",
                "2005-01-01",
                "705.4",
                "10520.2",
                "13771.44276"
              ],
              [
                "Disc",
                "CD",
                "2006",
                "2006-01-01",
                "619.7",
                "9372.6",
                "11885.76785"
              ],
              [
                "Disc",
                "CD",
                "2007",
                "2007-01-01",
                "499.7",
                "7452.3",
                "9190.702658"
              ],
              [
                "Disc",
                "CD",
                "2008",
                "2008-01-01",
                "368.4",
                "5471.3",
                "6496.779627"
              ],
              [
                "Disc",
                "CD",
                "2009",
                "2009-01-01",
                "296.6",
                "4318.8",
                "5146.57822"
              ],
              [
                "Disc",
                "CD",
                "2010",
                "2010-01-01",
                "253",
                "3389.4",
                "3973.859173"
              ],
              [
                "Disc",
                "CD",
                "2011",
                "2011-01-01",
                "240.8",
                "3100.7",
                "3524.136143"
              ],
              [
                "Disc",
                "CD",
                "2012",
                "2012-01-01",
                "198.1643872",
                "2485.614699",
                "2767.776149"
              ],
              [
                "Disc",
                "CD",
                "2013",
                "2013-01-01",
                "173.7933029",
                "2140.917718",
                "2349.534897"
              ],
              [
                "Disc",
                "CD",
                "2014",
                "2014-01-01",
                "138.7023634",
                "1776.249324",
                "1918.215115"
              ],
              [
                "Disc",
                "CD",
                "2015",
                "2015-01-01",
                "117.1440518",
                "1444.993194",
                "1558.633452"
              ],
              [
                "Disc",
                "CD",
                "2016",
                "2016-01-01",
                "97.5770712",
                "1130.764651",
                "1204.497778"
              ],
              [
                "Disc",
                "CD",
                "2017",
                "2017-01-01",
                "87.68249997",
                "1057.32309",
                "1102.774352"
              ],
              [
                "Disc",
                "CD",
                "2018",
                "2018-01-01",
                "51.95427564",
                "698.3866372",
                "711.0412395"
              ],
              [
                "Disc",
                "CD",
                "2019",
                "2019-01-01",
                "46.50649558",
                "614.5097799",
                "614.5097799"
              ],
              [
                "Disc",
                "CD Single",
                "1988",
                "1988-01-01",
                "1.6",
                "9.8",
                "21.17868639"
              ],
              [
                "Disc",
                "CD Single",
                "1990",
                "1990-01-01",
                "1.1",
                "6",
                "11.73635807"
              ],
              [
                "Disc",
                "CD Single",
                "1991",
                "1991-01-01",
                "5.7",
                "35.1",
                "65.88517401"
              ],
              [
                "Disc",
                "CD Single",
                "1992",
                "1992-01-01",
                "7.3",
                "45.1",
                "82.1819722"
              ],
              [
                "Disc",
                "CD Single",
                "1993",
                "1993-01-01",
                "7.8",
                "45.8",
                "81.03176886"
              ],
              [
                "Disc",
                "CD Single",
                "1994",
                "1994-01-01",
                "9.3",
                "56.1",
                "96.77704251"
              ],
              [
                "Disc",
                "CD Single",
                "1995",
                "1995-01-01",
                "21.5",
                "110.9",
                "186.0391161"
              ],
              [
                "Disc",
                "CD Single",
                "1996",
                "1996-01-01",
                "43.2",
                "184.1",
                "299.9773977"
              ],
              [
                "Disc",
                "CD Single",
                "1997",
                "1997-01-01",
                "66.7",
                "272.7",
                "434.3779682"
              ],
              [
                "Disc",
                "CD Single",
                "1998",
                "1998-01-01",
                "56",
                "213.2",
                "334.3930822"
              ],
              [
                "Disc",
                "CD Single",
                "1999",
                "1999-01-01",
                "55.9",
                "222.4",
                "341.2852149"
              ],
              [
                "Disc",
                "CD Single",
                "2000",
                "2000-01-01",
                "34.2",
                "142.7",
                "211.8597787"
              ],
              [
                "Disc",
                "CD Single",
                "2001",
                "2001-01-01",
                "17.3",
                "79.4",
                "114.6197956"
              ],
              [
                "Disc",
                "CD Single",
                "2002",
                "2002-01-01",
                "4.5",
                "19.6",
                "27.85368093"
              ],
              [
                "Disc",
                "CD Single",
                "2003",
                "2003-01-01",
                "8.3",
                "36",
                "50.01984783"
              ],
              [
                "Disc",
                "CD Single",
                "2004",
                "2004-01-01",
                "3.1",
                "15",
                "20.30097935"
              ],
              [
                "Disc",
                "CD Single",
                "2005",
                "2005-01-01",
                "2.8",
                "10.9",
                "14.26861905"
              ],
              [
                "Disc",
                "CD Single",
                "2006",
                "2006-01-01",
                "1.7",
                "7.7",
                "9.764677083"
              ],
              [
                "Disc",
                "CD Single",
                "2007",
                "2007-01-01",
                "2.6",
                "12.2",
                "15.04590159"
              ],
              [
                "Disc",
                "CD Single",
                "2008",
                "2008-01-01",
                "0.7",
                "3.5",
                "4.156001078"
              ],
              [
                "Disc",
                "CD Single",
                "2009",
                "2009-01-01",
                "0.9",
                "3.1",
                "3.694172567"
              ],
              [
                "Disc",
                "CD Single",
                "2010",
                "2010-01-01",
                "1",
                "2.9",
                "3.400068331"
              ],
              [
                "Disc",
                "CD Single",
                "2011",
                "2011-01-01",
                "1.3",
                "3.5",
                "3.977965137"
              ],
              [
                "Disc",
                "CD Single",
                "2012",
                "2012-01-01",
                "1.072870407",
                "3.225092945",
                "3.59119832"
              ],
              [
                "Disc",
                "CD Single",
                "2013",
                "2013-01-01",
                "0.628895398",
                "2.445737226",
                "2.684056894"
              ],
              [
                "Disc",
                "CD Single",
                "2014",
                "2014-01-01",
                "0.928725116",
                "3.616015547",
                "3.905023683"
              ],
              [
                "Disc",
                "CD Single",
                "2015",
                "2015-01-01",
                "0.386721563",
                "1.19694661",
                "1.291079457"
              ],
              [
                "Disc",
                "CD Single",
                "2016",
                "2016-01-01",
                "0.121745255",
                "0.263199082",
                "0.280361354"
              ],
              [
                "Disc",
                "CD Single",
                "2017",
                "2017-01-01",
                "0.13261663",
                "1.478694184",
                "1.542258972"
              ],
              [
                "Disc",
                "CD Single",
                "2018",
                "2018-01-01",
                "0.020854078",
                "0.15516984",
                "0.157981482"
              ],
              [
                "Disc",
                "CD Single",
                "2019",
                "2019-01-01",
                "0.026257455",
                "0.181678878",
                "0.181678878"
              ],
              [
                "Download",
                "Download Album",
                "2004",
                "2004-01-01",
                "4.6",
                "45.5",
                "61.57963737"
              ],
              [
                "Download",
                "Download Album",
                "2005",
                "2005-01-01",
                "13.6",
                "135.7",
                "177.6377619"
              ],
              [
                "Download",
                "Download Album",
                "2006",
                "2006-01-01",
                "27.6",
                "275.9",
                "349.8797932"
              ],
              [
                "Download",
                "Download Album",
                "2007",
                "2007-01-01",
                "49.8",
                "497.4",
                "613.4288075"
              ],
              [
                "Download",
                "Download Album",
                "2008",
                "2008-01-01",
                "63.6",
                "635.3",
                "754.373567"
              ],
              [
                "Download",
                "Download Album",
                "2009",
                "2009-01-01",
                "74.5",
                "744.3",
                "886.9589166"
              ],
              [
                "Download",
                "Download Album",
                "2010",
                "2010-01-01",
                "85.8",
                "872.4",
                "1022.834349"
              ],
              [
                "Download",
                "Download Album",
                "2011",
                "2011-01-01",
                "103.9",
                "1070.8",
                "1217.03002"
              ],
              [
                "Download",
                "Download Album",
                "2012",
                "2012-01-01",
                "116.7336318",
                "1204.822243",
                "1341.590983"
              ],
              [
                "Download",
                "Download Album",
                "2013",
                "2013-01-01",
                "117.979213",
                "1232.139716",
                "1352.202953"
              ],
              [
                "Download",
                "Download Album",
                "2014",
                "2014-01-01",
                "114.2304708",
                "1117.900009",
                "1207.247578"
              ],
              [
                "Download",
                "Download Album",
                "2015",
                "2015-01-01",
                "106.7838841",
                "1064.433607",
                "1148.145081"
              ],
              [
                "Download",
                "Download Album",
                "2016",
                "2016-01-01",
                "85.12334989",
                "868.5942684",
                "925.232201"
              ],
              [
                "Download",
                "Download Album",
                "2017",
                "2017-01-01",
                "66.38610376",
                "668.5007059",
                "697.2376182"
              ],
              [
                "Download",
                "Download Album",
                "2018",
                "2018-01-01",
                "49.73492454",
                "499.6508324",
                "508.7043884"
              ],
              [
                "Download",
                "Download Album",
                "2019",
                "2019-01-01",
                "40.20271234",
                "394.5330062",
                "394.5330062"
              ],
              [
                "Download",
                "Download Music Video",
                "2005",
                "2005-01-01",
                "1.9",
                "3.7",
                "4.84347619"
              ],
              [
                "Download",
                "Download Music Video",
                "2006",
                "2006-01-01",
                "9.9",
                "19.7",
                "24.98235566"
              ],
              [
                "Download",
                "Download Music Video",
                "2007",
                "2007-01-01",
                "14.2",
                "28.2",
                "34.77823155"
              ],
              [
                "Download",
                "Download Music Video",
                "2008",
                "2008-01-01",
                "20.8",
                "41.3",
                "49.04081272"
              ],
              [
                "Download",
                "Download Music Video",
                "2009",
                "2009-01-01",
                "20.5",
                "40.9",
                "48.73924451"
              ],
              [
                "Download",
                "Download Music Video",
                "2010",
                "2010-01-01",
                "18.4",
                "36.6",
                "42.91120721"
              ],
              [
                "Download",
                "Download Music Video",
                "2011",
                "2011-01-01",
                "16.3",
                "32.4",
                "36.82459156"
              ],
              [
                "Download",
                "Download Music Video",
                "2012",
                "2012-01-01",
                "10.473489",
                "20.842242",
                "23.20820694"
              ],
              [
                "Download",
                "Download Music Video",
                "2013",
                "2013-01-01",
                "8.412464",
                "16.740803",
                "18.37207499"
              ],
              [
                "Download",
                "Download Music Video",
                "2014",
                "2014-01-01",
                "6.82264392",
                "13.577058",
                "14.6621972"
              ],
              [
                "Download",
                "Download Music Video",
                "2015",
                "2015-01-01",
                "3.223325002",
                "6.414419",
                "6.918875516"
              ],
              [
                "Download",
                "Download Music Video",
                "2016",
                "2016-01-01",
                "2.145427196",
                "4.26940012",
                "4.547792467"
              ],
              [
                "Download",
                "Download Music Video",
                "2017",
                "2017-01-01",
                "1.399889693",
                "2.785780489",
                "2.905533136"
              ],
              [
                "Download",
                "Download Music Video",
                "2018",
                "2018-01-01",
                "1.115985226",
                "2.2208106",
                "2.261051168"
              ],
              [
                "Download",
                "Download Music Video",
                "2019",
                "2019-01-01",
                "0.93412583",
                "1.858910402",
                "1.858910402"
              ],
              [
                "Download",
                "Download Single",
                "2004",
                "2004-01-01",
                "139.4",
                "138",
                "186.7690101"
              ],
              [
                "Download",
                "Download Single",
                "2005",
                "2005-01-01",
                "366.9",
                "363.3",
                "475.577"
              ],
              [
                "Download",
                "Download Single",
                "2006",
                "2006-01-01",
                "586.4",
                "580.6",
                "736.2820149"
              ],
              [
                "Download",
                "Download Single",
                "2007",
                "2007-01-01",
                "819.4",
                "811",
                "1000.182475"
              ],
              [
                "Download",
                "Download Single",
                "2008",
                "2008-01-01",
                "1042.7",
                "1032.2",
                "1225.664089"
              ],
              [
                "Download",
                "Download Single",
                "2009",
                "2009-01-01",
                "1124.4",
                "1172",
                "1396.635564"
              ],
              [
                "Download",
                "Download Single",
                "2010",
                "2010-01-01",
                "1177.4",
                "1336.4",
                "1566.845282"
              ],
              [
                "Download",
                "Download Single",
                "2011",
                "2011-01-01",
                "1332.3",
                "1522.4",
                "1730.301179"
              ],
              [
                "Download",
                "Download Single",
                "2012",
                "2012-01-01",
                "1402.739373",
                "1644.570645",
                "1831.258646"
              ],
              [
                "Download",
                "Download Single",
                "2013",
                "2013-01-01",
                "1332.795366",
                "1573.420534",
                "1726.739156"
              ],
              [
                "Download",
                "Download Single",
                "2014",
                "2014-01-01",
                "1154.379327",
                "1355.331251",
                "1463.655387"
              ],
              [
                "Download",
                "Download Single",
                "2015",
                "2015-01-01",
                "986.2550359",
                "1185.237595",
                "1278.449595"
              ],
              [
                "Download",
                "Download Single",
                "2016",
                "2016-01-01",
                "743.0034138",
                "900.1814811",
                "958.8791031"
              ],
              [
                "Download",
                "Download Single",
                "2017",
                "2017-01-01",
                "553.5161518",
                "678.5248883",
                "707.6927112"
              ],
              [
                "Download",
                "Download Single",
                "2018",
                "2018-01-01",
                "399.7738523",
                "490.4304887",
                "499.3169742"
              ],
              [
                "Download",
                "Download Single",
                "2019",
                "2019-01-01",
                "335.3391935",
                "414.804251",
                "414.804251"
              ],
              [
                "Other",
                "DVD Audio",
                "2001",
                "2001-01-01",
                "0.263",
                "6",
                "8.661445511"
              ],
              [
                "Other",
                "DVD Audio",
                "2002",
                "2002-01-01",
                "0.43",
                "8.5",
                "12.07940245"
              ],
              [
                "Other",
                "DVD Audio",
                "2003",
                "2003-01-01",
                "0.4",
                "8",
                "11.11552174"
              ],
              [
                "Other",
                "DVD Audio",
                "2004",
                "2004-01-01",
                "0.3",
                "6.5",
                "8.797091053"
              ],
              [
                "Other",
                "DVD Audio",
                "2005",
                "2005-01-01",
                "0.5",
                "11.2",
                "14.66133333"
              ],
              [
                "Other",
                "DVD Audio",
                "2006",
                "2006-01-01",
                "0.1",
                "2.4",
                "3.043535714"
              ],
              [
                "Other",
                "DVD Audio",
                "2007",
                "2007-01-01",
                "0.2",
                "2.8",
                "3.453157742"
              ],
              [
                "Other",
                "DVD Audio",
                "2008",
                "2008-01-01",
                "0.04",
                "1.2",
                "1.424914655"
              ],
              [
                "Other",
                "DVD Audio",
                "2009",
                "2009-01-01",
                "0.1",
                "1.6",
                "1.906669712"
              ],
              [
                "Other",
                "DVD Audio",
                "2010",
                "2010-01-01",
                "0.04",
                "0.9",
                "1.05519362"
              ],
              [
                "Other",
                "DVD Audio",
                "2011",
                "2011-01-01",
                "0.01",
                "0.3",
                "0.34096844"
              ],
              [
                "Other",
                "DVD Audio",
                "2012",
                "2012-01-01",
                "0.008533145",
                "0.183106992",
                "0.20389289"
              ],
              [
                "Other",
                "DVD Audio",
                "2014",
                "2014-01-01",
                "0.066542722",
                "2.139460944",
                "2.310456232"
              ],
              [
                "Other",
                "DVD Audio",
                "2015",
                "2015-01-01",
                "0.179506738",
                "5.416232673",
                "5.842187676"
              ],
              [
                "Other",
                "DVD Audio",
                "2016",
                "2016-01-01",
                "0.085898932",
                "2.83553587",
                "3.020431045"
              ],
              [
                "Other",
                "DVD Audio",
                "2017",
                "2017-01-01",
                "0.061332251",
                "2.606840648",
                "2.718901189"
              ],
              [
                "Other",
                "DVD Audio",
                "2018",
                "2018-01-01",
                "0.092803246",
                "3.317383752",
                "3.377493968"
              ],
              [
                "Other",
                "DVD Audio",
                "2019",
                "2019-01-01",
                "0.027982262",
                "1.067303184",
                "1.067303184"
              ],
              [
                "Other",
                "Kiosk",
                "2005",
                "2005-01-01",
                "0.7",
                "1",
                "1.309047619"
              ],
              [
                "Other",
                "Kiosk",
                "2006",
                "2006-01-01",
                "1.4",
                "1.9",
                "2.409465774"
              ],
              [
                "Other",
                "Kiosk",
                "2007",
                "2007-01-01",
                "1.8",
                "2.6",
                "3.206503618"
              ],
              [
                "Other",
                "Kiosk",
                "2008",
                "2008-01-01",
                "1.6",
                "2.6",
                "3.087315086"
              ],
              [
                "Other",
                "Kiosk",
                "2009",
                "2009-01-01",
                "1.7",
                "6.3",
                "7.507511991"
              ],
              [
                "Other",
                "Kiosk",
                "2010",
                "2010-01-01",
                "1.7",
                "6.4",
                "7.503599075"
              ],
              [
                "Other",
                "Kiosk",
                "2011",
                "2011-01-01",
                "1.3",
                "2.7",
                "3.068715963"
              ],
              [
                "Other",
                "Kiosk",
                "2012",
                "2012-01-01",
                "1.95507",
                "3.654065",
                "4.068866328"
              ],
              [
                "Other",
                "Kiosk",
                "2013",
                "2013-01-01",
                "3.7442",
                "6.183604",
                "6.786152156"
              ],
              [
                "Other",
                "Kiosk",
                "2014",
                "2014-01-01",
                "1.592073358",
                "2.582636",
                "2.789051821"
              ],
              [
                "Other",
                "Kiosk",
                "2015",
                "2015-01-01",
                "2.202659889",
                "3.700455",
                "3.99147413"
              ],
              [
                "Other",
                "Kiosk",
                "2016",
                "2016-01-01",
                "1.74878121",
                "2.943916801",
                "3.13587911"
              ],
              [
                "Other",
                "Kiosk",
                "2017",
                "2017-01-01",
                "1.322377717",
                "2.25474315",
                "2.351668038"
              ],
              [
                "Other",
                "Kiosk",
                "2018",
                "2018-01-01",
                "1.097856529",
                "1.965045799",
                "2.000651969"
              ],
              [
                "Other",
                "Kiosk",
                "2019",
                "2019-01-01",
                "0.899703865",
                "1.586470587",
                "1.586470587"
              ],
              [
                "Streaming",
                "Limited Tier Paid Subscription",
                "2016",
                "2016-01-01",
                "",
                "263.3636852",
                "280.5366913"
              ],
              [
                "Streaming",
                "Limited Tier Paid Subscription",
                "2017",
                "2017-01-01",
                "",
                "591.6010975",
                "617.032318"
              ],
              [
                "Streaming",
                "Limited Tier Paid Subscription",
                "2018",
                "2018-01-01",
                "",
                "747.0549062",
                "760.591366"
              ],
              [
                "Streaming",
                "Limited Tier Paid Subscription",
                "2019",
                "2019-01-01",
                "",
                "829.4987397",
                "829.4987397"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1973",
                "1973-01-01",
                "280",
                "1246",
                "7174.518514"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1974",
                "1974-01-01",
                "276",
                "1356",
                "7031.863935"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1975",
                "1975-01-01",
                "257",
                "1485",
                "7056.703439"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1976",
                "1976-01-01",
                "273",
                "1663",
                "7472.013902"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1977",
                "1977-01-01",
                "344",
                "2195.1",
                "9260.605292"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1978",
                "1978-01-01",
                "341.3",
                "2473.3",
                "9698.105186"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1979",
                "1979-01-01",
                "290",
                "2057",
                "7243.615"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1980",
                "1980-01-01",
                "308",
                "2200",
                "6825.793689"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1981",
                "1981-01-01",
                "295.2",
                "2341.7",
                "6586.050571"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1982",
                "1982-01-01",
                "243.9",
                "1925.1",
                "5100.158453"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1983",
                "1983-01-01",
                "209.6",
                "1689",
                "4335.388283"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1984",
                "1984-01-01",
                "204.6",
                "1548.8",
                "3810.987118"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1985",
                "1985-01-01",
                "167",
                "1280.5",
                "3042.46086"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1986",
                "1986-01-01",
                "125.2",
                "983",
                "2292.982035"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1987",
                "1987-01-01",
                "107",
                "793.1",
                "1784.872946"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1988",
                "1988-01-01",
                "72.4",
                "532.2",
                "1150.132336"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1989",
                "1989-01-01",
                "34.6",
                "220.3",
                "454.203525"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1990",
                "1990-01-01",
                "11.7",
                "86.5",
                "169.1991622"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1991",
                "1991-01-01",
                "4.8",
                "29.4",
                "55.18587225"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1992",
                "1992-01-01",
                "2.3",
                "13.5",
                "24.59992516"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1993",
                "1993-01-01",
                "1.2",
                "10.6",
                "18.75407751"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1994",
                "1994-01-01",
                "1.9",
                "17.8",
                "30.7064413"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1995",
                "1995-01-01",
                "2.2",
                "25.1",
                "42.10623819"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1996",
                "1996-01-01",
                "2.9",
                "36.8",
                "59.96289101"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1997",
                "1997-01-01",
                "2.7",
                "33.3",
                "53.04285421"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1998",
                "1998-01-01",
                "3.4",
                "34",
                "53.32722699"
              ],
              [
                "Vinyl",
                "LP/EP",
                "1999",
                "1999-01-01",
                "2.9",
                "31.8",
                "48.79887515"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2000",
                "2000-01-01",
                "2.2",
                "27.7",
                "41.12484843"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2001",
                "2001-01-01",
                "2.3",
                "27.4",
                "39.5539345"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2002",
                "2002-01-01",
                "1.743",
                "20.5",
                "29.13267649"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2003",
                "2003-01-01",
                "1.5",
                "21.7",
                "30.15085272"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2004",
                "2004-01-01",
                "1.4",
                "19.3",
                "26.12059344"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2005",
                "2005-01-01",
                "1",
                "14.2",
                "18.58847619"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2006",
                "2006-01-01",
                "0.9",
                "15.7",
                "19.90979613"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2007",
                "2007-01-01",
                "1.3",
                "22.9",
                "28.24189725"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2008",
                "2008-01-01",
                "2.9",
                "56.7",
                "67.32721746"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2009",
                "2009-01-01",
                "3.5",
                "63.8",
                "76.02845477"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2010",
                "2010-01-01",
                "4.2",
                "88.9",
                "104.2296809"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2011",
                "2011-01-01",
                "5.5",
                "119.4",
                "135.7054393"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2012",
                "2012-01-01",
                "6.915365189",
                "160.7230583",
                "178.9679822"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2013",
                "2013-01-01",
                "9.35128587",
                "210.739051",
                "231.2740702"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2014",
                "2014-01-01",
                "10.31556391",
                "243.8468483",
                "263.3361791"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2015",
                "2015-01-01",
                "13.68102972",
                "333.3797931",
                "359.5981629"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2016",
                "2016-01-01",
                "14.77088603",
                "355.430891",
                "378.607271"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2017",
                "2017-01-01",
                "15.55608917",
                "388.5111082",
                "405.2120773"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2018",
                "2018-01-01",
                "16.67012733",
                "419.223947",
                "426.8201866"
              ],
              [
                "Vinyl",
                "LP/EP",
                "2019",
                "2019-01-01",
                "19.10316283",
                "497.5889208",
                "497.5889208"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1989",
                "1989-01-01",
                "6.1",
                "115.4",
                "237.92595"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1990",
                "1990-01-01",
                "9.2",
                "172.3",
                "337.0290826"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1991",
                "1991-01-01",
                "6.1",
                "118.1",
                "221.6820242"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1992",
                "1992-01-01",
                "7.6",
                "157.4",
                "286.8169052"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1993",
                "1993-01-01",
                "11",
                "213.3",
                "377.3815785"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1994",
                "1994-01-01",
                "11.2",
                "231.1",
                "398.6662126"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1995",
                "1995-01-01",
                "12.6",
                "220.3",
                "369.5619232"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1996",
                "1996-01-01",
                "16.9",
                "236.1",
                "384.7075698"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1997",
                "1997-01-01",
                "18.6",
                "323.9",
                "515.9333477"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1998",
                "1998-01-01",
                "27.2",
                "508",
                "796.7715092"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "1999",
                "1999-01-01",
                "19.8",
                "376.7",
                "578.0671783"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2000",
                "2000-01-01",
                "18.2",
                "281.9",
                "418.523277"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2001",
                "2001-01-01",
                "17.7",
                "329.2",
                "475.2246437"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2002",
                "2002-01-01",
                "14.7",
                "288.4",
                "409.8470195"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2003",
                "2003-01-01",
                "19.9",
                "399.9",
                "555.6371429"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2004",
                "2004-01-01",
                "32.8",
                "607.2",
                "821.7836443"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2005",
                "2005-01-01",
                "33.8",
                "602.2",
                "788.3084762"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2006",
                "2006-01-01",
                "23.2",
                "451.1",
                "572.0579003"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2007",
                "2007-01-01",
                "27.5",
                "484.9",
                "598.0129247"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2008",
                "2008-01-01",
                "13.2",
                "227.3",
                "269.9025843"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2009",
                "2009-01-01",
                "11.6",
                "209.6",
                "249.7737323"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2010",
                "2010-01-01",
                "9.1",
                "177.6",
                "208.2248743"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2011",
                "2011-01-01",
                "7.7",
                "151",
                "171.6207816"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2012",
                "2012-01-01",
                "6.032725467",
                "116.6136546",
                "129.8513772"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2013",
                "2013-01-01",
                "4.814626524",
                "106.2831378",
                "116.6396724"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2014",
                "2014-01-01",
                "4.065323601",
                "89.70557988",
                "96.87525106"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2015",
                "2015-01-01",
                "3.133228006",
                "70.43436396",
                "75.97361449"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2016",
                "2016-01-01",
                "2.495531725",
                "56.92290281",
                "60.63464218"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2017",
                "2017-01-01",
                "1.87712837",
                "38.619447",
                "40.27958535"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2018",
                "2018-01-01",
                "1.395058021",
                "27.5612603",
                "28.06066388"
              ],
              [
                "Other",
                "Music Video (Physical)",
                "2019",
                "2019-01-01",
                "1.32294236",
                "27.70524678",
                "27.70524678"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2011",
                "2011-01-01",
                "",
                "113.8",
                "129.340695"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2012",
                "2012-01-01",
                "",
                "170.9354084",
                "190.3396156"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2013",
                "2013-01-01",
                "",
                "220.8735445",
                "242.3960978"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2014",
                "2014-01-01",
                "",
                "283.7934094",
                "306.475448"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2015",
                "2015-01-01",
                "",
                "371.9903964",
                "401.2452641"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2016",
                "2016-01-01",
                "",
                "489.3776076",
                "521.288175"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2017",
                "2017-01-01",
                "",
                "658.6064926",
                "686.9180813"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2018",
                "2018-01-01",
                "",
                "759.5323682",
                "773.2949167"
              ],
              [
                "Streaming",
                "On-Demand Streaming (Ad-Supported)",
                "2019",
                "2019-01-01",
                "",
                "908.1493305",
                "908.1493305"
              ],
              [
                "Streaming",
                "Other Ad-Supported Streaming",
                "2016",
                "2016-01-01",
                "",
                "81.26086562",
                "86.55959668"
              ],
              [
                "Streaming",
                "Other Ad-Supported Streaming",
                "2017",
                "2017-01-01",
                "",
                "261.786859",
                "273.040319"
              ],
              [
                "Streaming",
                "Other Ad-Supported Streaming",
                "2018",
                "2018-01-01",
                "",
                "251.4119188",
                "255.9674439"
              ],
              [
                "Streaming",
                "Other Ad-Supported Streaming",
                "2019",
                "2019-01-01",
                "",
                "251.0647101",
                "251.0647101"
              ],
              [
                "Download",
                "Other Digital",
                "2016",
                "2016-01-01",
                "",
                "17.14166287",
                "18.25940954"
              ],
              [
                "Download",
                "Other Digital",
                "2017",
                "2017-01-01",
                "",
                "16.88510987",
                "17.61095192"
              ],
              [
                "Download",
                "Other Digital",
                "2018",
                "2018-01-01",
                "",
                "19.83957487",
                "20.19906331"
              ],
              [
                "Download",
                "Other Digital",
                "2019",
                "2019-01-01",
                "",
                "21.51717501",
                "21.51717501"
              ],
              [
                "Tape",
                "Other Tapes",
                "1973",
                "1973-01-01",
                "2.2",
                "15.6",
                "89.82543243"
              ],
              [
                "Tape",
                "Other Tapes",
                "1974",
                "1974-01-01",
                "1.9",
                "13.3",
                "68.97034686"
              ],
              [
                "Tape",
                "Other Tapes",
                "1975",
                "1975-01-01",
                "1.5",
                "10.2",
                "48.47028625"
              ],
              [
                "Tape",
                "Other Tapes",
                "1976",
                "1976-01-01",
                "0.7",
                "5.1",
                "22.91477504"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2005",
                "2005-01-01",
                "",
                "149.2",
                "195.3099048"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2006",
                "2006-01-01",
                "",
                "206.2",
                "261.4904435"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2007",
                "2007-01-01",
                "",
                "234",
                "288.5853256"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2008",
                "2008-01-01",
                "",
                "221.4",
                "262.8967539"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2009",
                "2009-01-01",
                "",
                "206.2",
                "245.7220591"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2010",
                "2010-01-01",
                "",
                "212.4",
                "249.0256943"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2011",
                "2011-01-01",
                "",
                "247.8",
                "281.6399317"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2012",
                "2012-01-01",
                "",
                "399.8825311",
                "445.2763062"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2013",
                "2013-01-01",
                "",
                "643.3242888",
                "706.0116575"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2014",
                "2014-01-01",
                "",
                "770.2705591",
                "831.8340275"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2015",
                "2015-01-01",
                "",
                "1156.708514",
                "1247.676869"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2016",
                "2016-01-01",
                "",
                "2244.154254",
                "2390.487545"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2017",
                "2017-01-01",
                "",
                "3500.549813",
                "3651.028327"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2018",
                "2018-01-01",
                "",
                "4655.968522",
                "4740.333581"
              ],
              [
                "Streaming",
                "Paid Subscription",
                "2019",
                "2019-01-01",
                "",
                "5934.397625",
                "5934.397625"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2005",
                "2005-01-01",
                "170",
                "421.6",
                "551.8944762"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2006",
                "2006-01-01",
                "315",
                "773.8",
                "981.2866399"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2007",
                "2007-01-01",
                "433.8",
                "1055.8",
                "1302.087123"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2008",
                "2008-01-01",
                "405.1",
                "977.1",
                "1160.236758"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2009",
                "2009-01-01",
                "294.3",
                "702.8",
                "837.504671"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2010",
                "2010-01-01",
                "188.5",
                "448",
                "525.2519353"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2011",
                "2011-01-01",
                "115.4",
                "276.2",
                "313.9182774"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2012",
                "2012-01-01",
                "58.75740356",
                "145.9929351",
                "162.5657282"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2013",
                "2013-01-01",
                "39.36623578",
                "97.99961233",
                "107.5489764"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2014",
                "2014-01-01",
                "26.63232368",
                "66.31137067",
                "71.61127201"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2015",
                "2015-01-01",
                "21.92486605",
                "54.58202422",
                "58.87458101"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2016",
                "2016-01-01",
                "22.62078539",
                "56.32529913",
                "59.99807088"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2017",
                "2017-01-01",
                "14.26286994",
                "35.51373565",
                "37.04036846"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2018",
                "2018-01-01",
                "10.02628673",
                "24.9578598",
                "25.41009037"
              ],
              [
                "Download",
                "Ringtones & Ringbacks",
                "2019",
                "2019-01-01",
                "8.605769716",
                "21.4267369",
                "21.4267369"
              ],
              [
                "Disc",
                "SACD",
                "2003",
                "2003-01-01",
                "1.3",
                "26.3",
                "36.54227772"
              ],
              [
                "Disc",
                "SACD",
                "2004",
                "2004-01-01",
                "0.8",
                "16.6",
                "22.46641715"
              ],
              [
                "Disc",
                "SACD",
                "2005",
                "2005-01-01",
                "0.5",
                "10",
                "13.09047619"
              ],
              [
                "Disc",
                "SACD",
                "2006",
                "2006-01-01",
                "0.3",
                "5.5",
                "6.974769345"
              ],
              [
                "Disc",
                "SACD",
                "2007",
                "2007-01-01",
                "0.2",
                "3.6",
                "4.43977424"
              ],
              [
                "Disc",
                "SACD",
                "2008",
                "2008-01-01",
                "0.1",
                "3.1",
                "3.681029526"
              ],
              [
                "Disc",
                "SACD",
                "2009",
                "2009-01-01",
                "0.1",
                "2.4",
                "2.860004568"
              ],
              [
                "Disc",
                "SACD",
                "2010",
                "2010-01-01",
                "0.1",
                "1.7",
                "1.993143504"
              ],
              [
                "Disc",
                "SACD",
                "2011",
                "2011-01-01",
                "0.1",
                "1.5",
                "1.704842202"
              ],
              [
                "Disc",
                "SACD",
                "2012",
                "2012-01-01",
                "0.065446",
                "1.3425",
                "1.494897613"
              ],
              [
                "Disc",
                "SACD",
                "2013",
                "2013-01-01",
                "0.044683",
                "0.9783826",
                "1.073719014"
              ],
              [
                "Disc",
                "SACD",
                "2014",
                "2014-01-01",
                "0.030486",
                "0.76344539",
                "0.82446336"
              ],
              [
                "Disc",
                "SACD",
                "2015",
                "2015-01-01",
                "0.041633",
                "1.04346656",
                "1.125529098"
              ],
              [
                "Disc",
                "SACD",
                "2016",
                "2016-01-01",
                "0.045272",
                "1.20686148",
                "1.28555661"
              ],
              [
                "Disc",
                "SACD",
                "2017",
                "2017-01-01",
                "0.032749",
                "0.85057856",
                "0.887142473"
              ],
              [
                "Disc",
                "SACD",
                "2018",
                "2018-01-01",
                "0.032804",
                "0.85969971",
                "0.875277267"
              ],
              [
                "Disc",
                "SACD",
                "2019",
                "2019-01-01",
                "0.017654",
                "0.433302292",
                "0.433302292"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2004",
                "2004-01-01",
                "",
                "6.9",
                "9.338450503"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2005",
                "2005-01-01",
                "",
                "20.4",
                "26.70457143"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2006",
                "2006-01-01",
                "",
                "32.8",
                "41.5949881"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2007",
                "2007-01-01",
                "",
                "36.2",
                "44.64439653"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2008",
                "2008-01-01",
                "",
                "100",
                "118.7428879"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2009",
                "2009-01-01",
                "",
                "155.5",
                "185.3044626"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2010",
                "2010-01-01",
                "",
                "249.2",
                "292.171389"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2011",
                "2011-01-01",
                "",
                "292",
                "331.8759486"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2012",
                "2012-01-01",
                "",
                "462",
                "514.445212"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2013",
                "2013-01-01",
                "",
                "590.4",
                "647.9302738"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2014",
                "2014-01-01",
                "",
                "773.4",
                "835.2135873"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2015",
                "2015-01-01",
                "",
                "802.6",
                "865.7197931"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2016",
                "2016-01-01",
                "",
                "883.9",
                "941.5359648"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2017",
                "2017-01-01",
                "",
                "652",
                "680.0275946"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2018",
                "2018-01-01",
                "",
                "952.8",
                "970.0645127"
              ],
              [
                "Streaming",
                "SoundExchange Distributions",
                "2019",
                "2019-01-01",
                "",
                "908.2",
                "908.2"
              ],
              [
                "Other",
                "Synchronization",
                "2009",
                "2009-01-01",
                "",
                "201.2",
                "239.7637163"
              ],
              [
                "Other",
                "Synchronization",
                "2010",
                "2010-01-01",
                "",
                "188.7",
                "221.238929"
              ],
              [
                "Other",
                "Synchronization",
                "2011",
                "2011-01-01",
                "",
                "196.5",
                "223.3343284"
              ],
              [
                "Other",
                "Synchronization",
                "2012",
                "2012-01-01",
                "",
                "190.597753",
                "212.2339858"
              ],
              [
                "Other",
                "Synchronization",
                "2013",
                "2013-01-01",
                "",
                "189.679434",
                "208.1623435"
              ],
              [
                "Other",
                "Synchronization",
                "2014",
                "2014-01-01",
                "",
                "189.713099",
                "204.8758184"
              ],
              [
                "Other",
                "Synchronization",
                "2015",
                "2015-01-01",
                "",
                "202.934888",
                "218.8945293"
              ],
              [
                "Other",
                "Synchronization",
                "2016",
                "2016-01-01",
                "",
                "214.8389765",
                "228.8478595"
              ],
              [
                "Other",
                "Synchronization",
                "2017",
                "2017-01-01",
                "",
                "232.0865229",
                "242.0632514"
              ],
              [
                "Other",
                "Synchronization",
                "2018",
                "2018-01-01",
                "",
                "285.5134913",
                "290.6869289"
              ],
              [
                "Other",
                "Synchronization",
                "2019",
                "2019-01-01",
                "",
                "276.2623602",
                "276.2623602"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1973",
                "1973-01-01",
                "228",
                "190",
                "1094.027703"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1974",
                "1974-01-01",
                "204",
                "194",
                "1006.033631"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1975",
                "1975-01-01",
                "164",
                "211.5",
                "1005.045641"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1976",
                "1976-01-01",
                "190",
                "245.1",
                "1101.25713"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1977",
                "1977-01-01",
                "190",
                "245.1",
                "1034.018658"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1978",
                "1978-01-01",
                "190",
                "260.3",
                "1020.66744"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1979",
                "1979-01-01",
                "212",
                "353.6",
                "1245.183405"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1980",
                "1980-01-01",
                "157",
                "250",
                "775.6583738"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1981",
                "1981-01-01",
                "154.7",
                "256.4",
                "721.1271155"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1982",
                "1982-01-01",
                "137.2",
                "283",
                "749.7505803"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1983",
                "1983-01-01",
                "124.8",
                "269.3",
                "691.2492982"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1984",
                "1984-01-01",
                "131.5",
                "298.7",
                "734.9831174"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1985",
                "1985-01-01",
                "120.7",
                "281",
                "667.6544331"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1986",
                "1986-01-01",
                "93.9",
                "228.1",
                "532.0744681"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1987",
                "1987-01-01",
                "82",
                "203.3",
                "457.5270079"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1988",
                "1988-01-01",
                "65.6",
                "180.4",
                "389.8607168"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1989",
                "1989-01-01",
                "36.6",
                "116.4",
                "239.9877"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1990",
                "1990-01-01",
                "27.6",
                "94.4",
                "184.6520337"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1991",
                "1991-01-01",
                "22",
                "63.9",
                "119.944804"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1992",
                "1992-01-01",
                "19.8",
                "66.4",
                "120.9951875"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1993",
                "1993-01-01",
                "15.1",
                "51.2",
                "90.58573287"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1994",
                "1994-01-01",
                "11.7",
                "47.2",
                "81.42382186"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1995",
                "1995-01-01",
                "10.2",
                "46.7",
                "78.34108858"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1996",
                "1996-01-01",
                "10.1",
                "47.5",
                "77.39775335"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1997",
                "1997-01-01",
                "7.5",
                "35.6",
                "56.70647477"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1998",
                "1998-01-01",
                "5.4",
                "25.7",
                "40.30910982"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "1999",
                "1999-01-01",
                "5.3",
                "27.9",
                "42.81410744"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2000",
                "2000-01-01",
                "4.8",
                "26.3",
                "39.04633624"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2001",
                "2001-01-01",
                "5.5",
                "31.4",
                "45.32823151"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2002",
                "2002-01-01",
                "4.4",
                "24.9",
                "35.38554364"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2003",
                "2003-01-01",
                "3.8",
                "21.5",
                "29.87296467"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2004",
                "2004-01-01",
                "3.5",
                "19.9",
                "26.93263261"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2005",
                "2005-01-01",
                "2.3",
                "13.2",
                "17.27942857"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2006",
                "2006-01-01",
                "1.5",
                "9.9",
                "12.55458482"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2007",
                "2007-01-01",
                "0.6",
                "4",
                "4.933082489"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2008",
                "2008-01-01",
                "0.4",
                "2.9",
                "3.44354375"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2009",
                "2009-01-01",
                "0.3",
                "2.5",
                "2.979171425"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2010",
                "2010-01-01",
                "0.3",
                "2.3",
                "2.696605918"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2011",
                "2011-01-01",
                "0.4",
                "4.6",
                "5.228182752"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2012",
                "2012-01-01",
                "0.388573687",
                "4.743055893",
                "5.281477044"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2013",
                "2013-01-01",
                "0.315817054",
                "2.978937179",
                "3.269213385"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2014",
                "2014-01-01",
                "0.481198278",
                "5.49935429",
                "5.938887283"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2015",
                "2015-01-01",
                "0.50786991",
                "5.752954082",
                "6.205390253"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2016",
                "2016-01-01",
                "0.404330651",
                "4.880679689",
                "5.198931395"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2017",
                "2017-01-01",
                "0.402959365",
                "6.07838535",
                "6.33967756"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2018",
                "2018-01-01",
                "0.346165002",
                "5.290337079",
                "5.386196747"
              ],
              [
                "Vinyl",
                "Vinyl Single",
                "2019",
                "2019-01-01",
                "0.336120488",
                "6.795945687",
                "6.795945687"
              ]
            ],
            "parseError": null,
            "parseOptions": {
              "separator": "\t",
              "thousandsSeparator": ",",
              "decimalsSeparator": ".",
              "locale": "en-GB",
              "unstackedData": null,
              "unstackedColumns": null
            },
            "dataTypes": {
              "Category": "string",
              "Format": "string",
              "Year": {
                "type": "number",
                "locale": "en-GB",
                "decimal": ".",
                "group": ",",
                "numerals": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9"
                ]
              },
              "year-date": {
                "type": "date",
                "dateFormat": "YYYY-MM-DD"
              },
              "Units": {
                "type": "number",
                "locale": "en-GB",
                "decimal": ".",
                "group": ",",
                "numerals": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9"
                ]
              },
              "Revenues in millions": {
                "type": "number",
                "locale": "en-GB",
                "decimal": ".",
                "group": ",",
                "numerals": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9"
                ]
              },
              "Revenues in millions (Adjusted for inflation)": {
                "type": "number",
                "locale": "en-GB",
                "decimal": ".",
                "group": ",",
                "numerals": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9"
                ]
              }
            },
            "chart": "rawgraphs.linechart",
            "mapping": {
              "x": {
                "ids": [
                  "1"
                ],
                "value": [
                  "Year"
                ],
                "isValid": true,
                "mappedType": "number"
              },
              "y": {
                "ids": [
                  "2"
                ],
                "value": [
                  "Units"
                ],
                "isValid": true,
                "mappedType": "number",
                "config": {
                  "aggregation": [
                    "sum"
                  ]
                }
              }
            },
            "visualOptions": {
              "width": 805,
              "height": 600,
              "background": "#FFFFFF",
              "marginTop": 10,
              "marginRight": 15,
              "marginBottom": 20,
              "marginLeft": 50,
              "showLegend": false,
              "legendWidth": 200,
              "showPoints": false,
              "dotsDiameter": 2,
              "interpolation": "curveBumpX",
              "yOrigin": false,
              "columnsNumber": 0,
              "xTicksAuto": true,
              "xTicksAmount": 1,
              "xTicksOuter": false,
              "sortSeriesBy": "Total value (descending)",
              "useSameScale": true,
              "showSeriesLabels": true,
              "repeatAxesLabels": false,
              "showLabels": true,
              "labelsPosition": "inline",
              "showGrid": true,
              "colorScale": {
                "scaleType": "ordinal",
                "interpolator": "schemeCategory10",
                "userScaleValues": [
                  {
                    "range": "#1f77b4",
                    "domain": 1
                  }
                ],
                "defaultColor": "#cccccc"
              }
            }
          }
        
const rows_Linechart = LineChart.userInput.split('\n');

const columns_LineChart = rows_Linechart[0].split('\t');

const Result_LineChart = rows_Linechart.slice(1).map(row => {
const rowData = row.split('\t');
const obj = {};
columns_LineChart.forEach((key, index) => {
  const value = index > 2 ? (rowData[index] ? parseFloat(rowData[index].replace(',', '')) : null) : rowData[index]; // Check for undefined value before calling replace method
  obj[key] = value;
});
return obj;
});


const mapping_LineChart = LineChart.mapping;



const viz_LineChart = chart(linechart, { data: Result_LineChart, mapping: mapping_LineChart });

console.log(viz_LineChart);


setViz_LineChart_Data(viz_LineChart);

    },[]);
    
    return(
     
      <Resizable direction="e">
        
      <Render_graph viz_LineChart={viz_LineChart} />
      
    </Resizable>
    
    );
  }
  console.log("riysx");
  debugger
  export default Demo_linechart;


    

