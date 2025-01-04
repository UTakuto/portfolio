import { useRef, useEffect } from "react";
const CircleDots = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Canvas サイズを設定
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const centerX = width / 2;
        const centerY = height / 2;
        let largeCircleRadius = 200; // 大きな円の初期半径
        const numDots = 500; // 点の数

        // ランダムに配置する小さな点を生成
        const dots = Array.from({ length: numDots }).map(() => ({
            angle: Math.random() * Math.PI * 2, // ランダムな角度
            distance: Math.random() * largeCircleRadius, // 大きな円内での距離
            size: Math.random() * 2 + 1, // 点のサイズ
            speed: Math.random() * 0.02 - 0.01, // 点の移動速度
        }));

        let radiusChangeDirection = 1; // 半径の増減を管理

        const draw = () => {
            // 背景をクリア
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // 大きな円全体の半径を変動させる
            if (largeCircleRadius >= 250) radiusChangeDirection = -1; // 半径が一定以上になったら縮小
            if (largeCircleRadius <= 150) radiusChangeDirection = 1; // 半径が一定以下になったら拡大
            largeCircleRadius += radiusChangeDirection * 0.5; // 半径の変化速度

            // 小さな点を描画
            dots.forEach((dot) => {
                // 点の位置を計算
                const x =
                    centerX + Math.cos(dot.angle) * (dot.distance * (largeCircleRadius / 200));
                const y =
                    centerY + Math.sin(dot.angle) * (dot.distance * (largeCircleRadius / 200));

                // 点を描画
                ctx.beginPath();
                ctx.arc(x, y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgb(0, 255, 0)";
                ctx.fill();

                // 点を動かす
                dot.angle += dot.speed; // 回転
                dot.distance += Math.random() * 0.1 - 0.05; // 拡散・収縮
                if (dot.distance > largeCircleRadius) dot.distance = largeCircleRadius; // 円外に出ない
                if (dot.distance < 0) dot.distance = 0; // 円心に吸い込まれない
            });

            // 次のフレームを要求
            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default CircleDots;
