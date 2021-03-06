'use strict';

angular.module('ionApp')
.directive('molecule', function ($timeout) {
    return {
        template: '<div></div>',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var uniqid = 'mol-' + Date.now();
            console.log('attrs', attrs)

            element.append('<canvas id="' + uniqid +'"></canvas>')
            var context = new ChemDoodle.RotatorCanvas3D(uniqid, 200, 200, {});
            context.specs.atoms_useJMOLColors = true;
            //context.specs.bonds_width_2D = 1;
            //context.specs.bonds_saturationWidth_2D = .18;
            //context.specs.bonds_hashSpacing_2D = 2.5;
            //context.specs.atoms_font_size_2D = 16;
            //context.specs.atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
            //context.specs.atoms_displayTerminalCarbonLabels_2D = true;


            context.specs.set3DRepresentation('van der Waals Spheres');
            context.specs.backgroundColor = 'black';
            var molFile = '24205269\n  CHEMDOOD12280910313D\n\n 74 79  0     1  0  0  0  0  0999 V2000\n    3.5023   -1.8134    1.9244 S   0  0  1  0  0  0  0  0  0  0  0  0\n    3.8557   -0.7220    0.9585 O   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4888   -0.6040   -1.1769 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2639    0.5477    0.6696 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6124   -1.8249    2.1911 C   0  0  1  0  0  0  0  0  0  0  0  0\n    3.0506   -3.3819    0.9277 C   0  0  2  0  0  0  0  0  0  0  0  0\n    1.0716   -1.8553    0.7155 C   0  0  2  0  0  0  0  0  0  0  0  0\n    2.0273   -2.7852   -0.0891 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4646   -3.2717    2.6987 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2445   -4.1276    1.9961 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1869   -0.7350    3.0956 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2580   -4.0284    0.3727 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.9641   -0.4906    0.0960 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.5514   -3.6345    3.7631 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.3200   -5.5625    2.1755 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1003   -0.1718    3.9869 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1278   -0.2705    3.0577 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.3164   -4.3691    1.2150 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3393   -4.2976   -0.9936 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.9974   -3.6660    5.0845 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7741   -3.9522    3.4667 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7168   -6.0920    3.4035 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.9956   -6.4152    1.1203 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6990    0.8559    4.8402 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5292    0.7573    3.9112 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.4560   -4.9791    0.6911 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.4791   -4.9077   -1.5175 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.3843    1.3204    4.8025 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.5375   -5.2483   -0.6751 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.1181   -4.0152    6.1093 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.6536   -4.3014    4.4916 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7893   -7.4741    3.5763 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0681   -7.7975    1.2931 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2073   -4.3330    5.8129 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4651   -8.3269    2.5211 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.3357    0.6284   -1.8881 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0452    2.4194    5.7148 C   0  0  0  0  0  0  0  0  0  0  0  0\n    7.7561   -5.9006   -1.2357 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1481   -4.7045    6.9086 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5408   -9.8046    2.7062 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0531   -2.2698    0.7098 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4497   -3.5748   -0.5863 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5359   -2.2124   -0.8757 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1224   -0.5141    4.1011 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.8622   -0.7038    2.3845 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.2761   -4.1784    2.2841 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5342   -4.0669   -1.6833 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0251   -3.4131    5.3343 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1376   -3.9322    2.4421 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0094   -5.4519    4.2306 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6765   -6.0232    0.1579 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4170    1.2817    5.5362 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.5567    1.1093    3.8737 H   0  0  0  0  0  0  0  0  0  0  0  0\n    7.2724   -5.2434    1.3580 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.5288   -5.1179   -2.5826 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4766   -4.0323    7.1351 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6844   -4.5447    4.2483 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1053   -7.8745    4.5359 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8095   -8.4516    0.4646 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0505    0.4000   -2.8850 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3037    1.1277   -1.9920 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3805    1.2760   -1.3734 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.5205    2.3984    6.6525 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1042    2.3234    5.9778 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.1102    3.3898    5.2329 H   0  0  0  0  0  0  0  0  0  0  0  0\n    8.6474   -5.6372   -0.6562 H   0  0  0  0  0  0  0  0  0  0  0  0\n    7.9378   -5.5784   -2.2667 H   0  0  0  0  0  0  0  0  0  0  0  0\n    7.6388   -6.9887   -1.2235 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.6201   -5.1948    7.7336 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.9101   -5.4069    6.5540 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6476   -3.8102    7.2941 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5797  -10.1882    3.0627 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7931  -10.3081    1.7667 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.3167  -10.0729    3.4313 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  1  5  1  0  0  0  0\n  1  6  1  0  0  0  0\n  3 13  1  0  0  0  0\n  3 36  1  0  0  0  0\n  4 13  2  0  0  0  0\n  5  7  1  0  0  0  0\n  5  9  1  0  0  0  0\n  5 11  1  0  0  0  0\n  6  8  1  0  0  0  0\n  6 10  1  0  0  0  0\n  6 12  1  0  0  0  0\n  7  8  1  0  0  0  0\n  7 13  1  0  0  0  0\n  7 41  1  0  0  0  0\n  8 42  1  0  0  0  0\n  8 43  1  0  0  0  0\n  9 10  2  0  0  0  0\n  9 14  1  0  0  0  0\n 10 15  1  0  0  0  0\n 11 16  2  0  0  0  0\n 11 17  1  0  0  0  0\n 12 18  2  0  0  0  0\n 12 19  1  0  0  0  0\n 14 20  2  0  0  0  0\n 14 21  1  0  0  0  0\n 15 22  2  0  0  0  0\n 15 23  1  0  0  0  0\n 16 24  1  0  0  0  0\n 16 44  1  0  0  0  0\n 17 25  2  0  0  0  0\n 17 45  1  0  0  0  0\n 18 26  1  0  0  0  0\n 18 46  1  0  0  0  0\n 19 27  2  0  0  0  0\n 19 47  1  0  0  0  0\n 20 30  1  0  0  0  0\n 20 48  1  0  0  0  0\n 21 31  2  0  0  0  0\n 21 49  1  0  0  0  0\n 22 32  1  0  0  0  0\n 22 50  1  0  0  0  0\n 23 33  2  0  0  0  0\n 23 51  1  0  0  0  0\n 24 28  2  0  0  0  0\n 24 52  1  0  0  0  0\n 25 28  1  0  0  0  0\n 25 53  1  0  0  0  0\n 26 29  2  0  0  0  0\n 26 54  1  0  0  0  0\n 27 29  1  0  0  0  0\n 27 55  1  0  0  0  0\n 28 37  1  0  0  0  0\n 29 38  1  0  0  0  0\n 30 34  2  0  0  0  0\n 30 56  1  0  0  0  0\n 31 34  1  0  0  0  0\n 31 57  1  0  0  0  0\n 32 35  2  0  0  0  0\n 32 58  1  0  0  0  0\n 33 35  1  0  0  0  0\n 33 59  1  0  0  0  0\n 34 39  1  0  0  0  0\n 35 40  1  0  0  0  0\n 36 60  1  0  0  0  0\n 36 61  1  0  0  0  0\n 36 62  1  0  0  0  0\n 37 63  1  0  0  0  0\n 37 64  1  0  0  0  0\n 37 65  1  0  0  0  0\n 38 66  1  0  0  0  0\n 38 67  1  0  0  0  0\n 38 68  1  0  0  0  0\n 39 69  1  0  0  0  0\n 39 70  1  0  0  0  0\n 39 71  1  0  0  0  0\n 40 72  1  0  0  0  0\n 40 73  1  0  0  0  0\n 40 74  1  0  0  0  0\nM  END\n';
            var molecule = ChemDoodle.readMOL(molFile, 1);
            context.loadMolecule(molecule);
            context.startAnimation();






            //var molFile = scope[attrs.molSrc]
            //var molObj = ChemDoodle.readMOL(molFile);
            //molObj.scaleToAverageBondLength(25);
            //var size = molObj.getDimension();
            //var scale = Math.min(context.width/size.x, context.height/size.y);
            //context.specs.scale = scale*.85;
            //context.repaint();



            
            
        }
    };
});
