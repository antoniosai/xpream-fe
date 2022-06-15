<template>
    <div>

        <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row" style="width: auto; display: block;">
                <div class="is-col">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">{{ $route.meta.title }}</h3>
                                <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                            </div>
                            <div class="option-box">
                                <div class="option-item">
                                    <span>Location</span>
                                    <select class="by_location">
                                        <option value="">All Location</option>
                                        <option value="GAH1">Hangar 1</option>
                                        <option value="GAH3">Hangar 3</option>
                                        <option value="GAH4">Hangar 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card-content">

                            <table class="table_view_slot table table-striped" id="fixTable">

                                <thead class="head_1">
                                    <tr>
                                        <th rowspan="3"
                                            style="background: rgb(59, 11, 203); color: white; text-align: center; font-size: 18px; position: relative; z-index: 1; top: 0px; left: 0px;">
                                            Month</th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;1</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;2</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;3</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;4</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;5</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;6</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;7</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;8</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;9</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;10</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;11</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;12</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;13</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;14</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; color: white; font-size: 20px; background-color: rgb(59, 11, 203); position: relative; top: 0px;">
                                            <b>Line&nbsp;15</b>
                                        </th>
                                    </tr>

                                    <tr>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-CRJ</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-ATR</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>NG-CRJ</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>A320</b>
                                        </th>
                                        <th colspan="2"
                                            style="text-align: center; white-space: nowrap; background: rgb(117, 140, 252); color: yellow; position: relative; top: 0px;">
                                            <b>A320</b>
                                        </th>
                                    </tr>

                                    <tr>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <th
                                            style="text-align: center; white-space: nowrap; background: rgb(144, 238, 144); color: black; position: relative; top: 0px;">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                    </tr>
                                </thead>


                                <tbody>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>October</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-25 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-2<br>22-25 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-1 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            31-31 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-13 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-7<br>10-11<br>18-18 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-2<br>5-9<br>13-18 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-4 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-9<br>29-30 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td class="btn_detail"
                                            style="text-align:center;cursor:pointer;white-space:nowrap;">
                                            1-5<br>15-24 </td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>December</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>January</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>February</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>March</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>April</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>May</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>June</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>July</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>August</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>September</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>October</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                    <tr>
                                        <td
                                            style="background: rgb(144, 238, 144); color: black; border-width: 1px 3px 1px 1px; border-style: solid; border-color: white black white white; border-image: initial; text-align: center; font-size: 14px; position: relative; left: 0px;">
                                            <b>November</b>
                                        </td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                        <!-- Line A -->
                                        <td style="text-align:center;background:red;">&nbsp;</td>

                                        <!-- Line B -->
                                        <td style="text-align:center;background:red;border-right:3px solid black;">
                                            &nbsp;</td>


                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
</template>

<script>

export default {

    title: 'Slot Availability',

    data: () => ({
        api_url: '/api/slot_and_capacity/gantt_data'
    }),

    components: {
    
    },


    mounted() {


    },

    methods: {
        
    }
}
</script>

<style>
    ::v-deep label {
        font-size: 12px
    }
</style>

